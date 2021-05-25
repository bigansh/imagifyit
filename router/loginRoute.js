const express = require('express'),
	router = express.Router()

router.get('/', (req, res) => {
	res.json({
		message: 'Login',
	})
})

module.exports = router
