const express = require('express'),
	mongoose = require('mongoose'),
	dotenv = require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
	res.json({
		message: 'Index',
	})
})

app.listen(process.env.PORT, () => {
	console.log(
		'Express server listening on port %d in %s mode',
		process.env.PORT,
		app.settings.env
	)
})
