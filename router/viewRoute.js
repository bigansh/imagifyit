const express = require('express'),
	router = express.Router()

const viewOg = require('../functions/view')

router.get('/', (req, res) => {
	res.redirect('/')
})

router.get('/:id', async (req, res) => {
	try {
		const ogDetails = await viewOg(req.params.id)

		if (ogDetails === undefined) res.redirect('/')
		else if (ogDetails) res.render('view', { og: ogDetails })
	} catch (error) {
		console.log(error, 'error')
	}
})

module.exports = router
