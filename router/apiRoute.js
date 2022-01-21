const express = require('express'),
	router = express.Router()

const aliasCheck = require('../functions/alisa')

router.get('*', (req, res) => {
	res.redirect('/')
})

router.post('/alias-check/:alias', async (req, res) => {
	try {
		if (req.params.alias === 'legal' || req.params.alias === 'create')
			res.json({ count: 1 })
		else {
			const count = await aliasCheck(req.params.alias)

			res.json({ count })
		}
	} catch (error) {
		console.error(error, 'error')
	}
})

router.post('/:slug', (req, res) => {
	res.redirect('/')
})

module.exports = router
