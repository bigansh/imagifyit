const express = require('express'),
	router = express.Router({ mergeParams: true })

const viewOg = require('../functions/view')

router.get('/', async (req, res) => {
	try {
		const ogDetails = await viewOg(req.params.slug)

		if (ogDetails === undefined) res.redirect('/')
		else if (ogDetails) res.render('link', { og: ogDetails })
	} catch (error) {
		console.error(error, 'error')
	}
})

module.exports = router
