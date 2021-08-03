const express = require('express'),
	shortid = require('shortid'),
	router = express.Router()

const uploader = require('../functions/uploader'),
	creator = require('../functions/creator')

router.get('/', (req, res) => {
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

router.get('/details', (req, res) => {
	res.redirect('/create')
})

router.post('/details', async (req, res) => {
	try {
		if (!req.body.alias) req.body.alias = shortid.generate()

		req.body.description = req.sanitize(req.body.description)

		const response = await creator(req.body)

		res.redirect(`/view/${response.id}`)
	} catch (error) {
		console.log(error, 'error')
	}
})

router.get('/:route', (req, res) => {
	res.redirect('/')
})

module.exports = router
