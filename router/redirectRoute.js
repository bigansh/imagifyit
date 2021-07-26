const express = require('express'),
	router = express.Router({ mergeParams: true })

const viewOg = require('../functions/view')

const mixpanel = require('../connections/mixpanelConnect')

router.get('/', async (req, res) => {
	try {
		const ogDetails = await viewOg(req.params.slug)

		if (ogDetails === undefined) res.redirect('/')
		else if (ogDetails) {
			mixpanel.track('Redirected', {
				distinct_id: ogDetails.id,
			})

			res.render('link', { og: ogDetails })
		}
	} catch (error) {
		console.log(error, 'error')
	}
})

module.exports = router
