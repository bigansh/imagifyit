const express = require('express'),
	uniqid = require('uniqid'),
	router = express.Router()

const uploader = require('../functions/uploader'),
	creator = require('../functions/creator')

router.get('/', (_req, res) => {
	res.render('upload')
})

router.post('/', async (req, res) => {
	let imageUrl

	try {
		if (req.body.base64URL) imageUrl = await uploader(req.body.base64URL)
		else if (req.body.url) imageUrl = req.body.url
		else {
			res.redirect('/create')
			return
		}

		res.render('create', { image: imageUrl })
	} catch (error) {
		console.log(error, 'error')
	}
})

router.post('/details', async (req, res) => {
	try {
		const response = await creator(req.body)
	} catch (error) {
		console.log(error, 'error')
	}
})

module.exports = router
