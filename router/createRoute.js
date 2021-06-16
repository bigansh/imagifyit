const express = require('express'),
	router = express.Router()

const uploader = require('../functions/uploader')

router.get('/', (_req, res) => {
	res.render('upload')
})

router.post('/', async (req, res) => {

	// const og = await uploader(req.body, id)

	// res.redirect('/create/details')
	console.log(req.body)
	res.redirect('/create/details')
})

router.get('/details', async (_req, res) => {
	res.render('create')
})

router.post('details', async (_req, res) => {})

module.exports = router
