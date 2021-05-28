const express = require('express'),
	dotenv = require('dotenv').config(),
	app = express()

const dbConnect = require('./connections/mongoConnect')

const authRoute = require('./router/authRoute')
const dashboardRoute = require('./router/dashboardRoute')
const redirectRoute = require('./router/redirectRoute')
const legalRoute = require('./router/legalRoute')
const createRoute = require('./router/createRoute')

dbConnect(process.env.DATABASE_URL)

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (_req, res) => {
	res.render('index')
})

app.use('/auth', authRoute)

app.use('/create', createRoute)

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
