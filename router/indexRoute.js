const express = require('express'),
	router = express.Router()

router.get('/', (_req, res) => {
	res.render('index')
})

module.exports = router
