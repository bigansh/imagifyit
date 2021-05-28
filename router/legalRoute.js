const express = require('express'),
	router = express.Router()

router.get('/terms-of-service', (_req, res) => {
	res.render('tos')
})

router.get('/privacy-policy', (_req, res) => {
	res.render('privacy')
})

module.exports = router
