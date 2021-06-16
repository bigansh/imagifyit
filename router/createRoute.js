const express = require('express'),
	uniqid = require('uniqid')
router = express.Router()

const uploader = require('../functions/uploader')

router.get('/', (_req, res) => {
	res.render('upload')
})

router.post('/', async (req, res) => {
	let imageUrl

	try {
		if (req.body.base64URL) {
			imageUrl = await uploader(req.body.base64URL)

			console.log(imageUrl)

			res.render('create', { imageUrl })
		}
	} catch (error) {
		console.log(error)

		res.send(error)
	}
})

router.get('/details', async (_req, res) => {
	res.render('create')
})

router.post('details', async (_req, res) => {})

module.exports = router
