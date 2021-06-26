const express = require('express'),
	router = express.Router()

router.get('/privacy-policy', (_req, res) => {
	res.render('privacy')
})

module.exports = router
