const express = require('express'),
	router = express.Router()

router.get('/', (req, res) => {
	res.redirect('/')
})

router.get('/:id', (req, res) => {
	res.render('view', {
		og: {
			image: 'https://www.dccomics.com/sites/default/files/Char_Gallery_Batman_DTC1018_6053f2162bdf03.97426416.jpg',
			title: 'ansh',
			description: 'agarwal',
			id: 'king'
		}
	})
})

module.exports = router
