const express = require('express'),
	router = express.Router()

router.get('/', (req, res) => {
	res.json({
		message: 'Dashboard',
	})
})

module.exports = router