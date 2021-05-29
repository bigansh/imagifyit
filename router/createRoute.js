const express = require('express'),
	router = express.Router()

const uploader = require('../functions/uploader')

router.get('/', (_req, res) => {
	res.render('create')
})

router.post('/', async (req, res) => {
	const ogSchema = await uploader(req.body, id)

	if(req.cookies) {
		
	}

	res.redirect('/create')
})

module.exports = router
