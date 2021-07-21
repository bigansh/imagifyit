const express = require('express'),
	router = express.Router()

router.get('/privacy-policy', (req, res) => {
	res.render('privacy')
})

router.get('/terms-of-service', (req, res) => {
	res.render('terms')
})

module.exports = router
