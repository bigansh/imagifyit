const express = require('express'),
	router = express.Router()

router.get('/', (req, res) => {
	res.render('dashboard')
})

module.exports = router