const express = require('express'),
	router = express.Router()

router.get('/login', (req, res) => {
	res.render('login')
})

router.get('/signup', (req, res) => {
	res.render('signup')
})

module.exports = router
