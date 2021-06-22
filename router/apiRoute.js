const express = require('express'),
	router = express.Router()

const aliasCheck = require('../functions/alisa')

router.get('*', (req, res) => {
	res.redirect('/')
})

router.post('/alias-check/:alias', async (req, res) => {
	try {
		const count = await aliasCheck(req.params.alias)

		res.send({ count })
	} catch (error) {
		console.error(error, 'error')
	}
})

module.exports = router
