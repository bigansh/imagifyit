const express = require('express'),
	dotenv = require('dotenv').config(),
	app = express()

const dbConnect = require('./connections/mongoConnect')

const loginRoute = require('./router/loginRoute')
const dashboardRoute = require('./router/dashboardRoute')
const redirectRoute = require('./router/redirectRoute')
const legalRoute = require('./router/legalRoute')

dbConnect()

app.get('/', (req, res) => {
	res.json({
		message: 'Index',
	})
})

app.use('/login', loginRoute)

app.use('/dashboard', dashboardRoute)

app.use('/legal', legalRoute)

app.use('/:slug', redirectRoute)

app.listen(process.env.PORT, () => {
	console.log(
		'Express server listening on port %d in %s mode',
		process.env.PORT,
		app.settings.env
	)
})
