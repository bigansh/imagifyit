const express = require('express'),
	dotenv = require('dotenv').config(),
	expressSanitizer = require('express-sanitizer'),
	app = express()

const dbConnect = require('./connections/mongoConnect'),
	dynamoConnect = require('./connections/dynamoConnect')

const authRoute = require('./router/authRoute'),
	dashboardRoute = require('./router/dashboardRoute'),
	redirectRoute = require('./router/redirectRoute'),
	legalRoute = require('./router/legalRoute'),
	createRoute = require('./router/createRoute'),
	imageRoute = require('./router/imageRoute'),
	indexRoute = require('./router/indexRoute')

dbConnect(process.env.DATABASE_URL)
dynamoConnect()

app.use(expressSanitizer())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ limit: '5mb', extended: true }))

app.use('/', indexRoute)

app.use('/auth', authRoute)

app.use('/create', createRoute)

app.use('/image', imageRoute)

app.use('/dashboard', dashboardRoute)

app.use('/legal', legalRoute)

app.use('/:slug', redirectRoute)

app.listen(process.env.PORT, () => {
	console.log(
		'Listening on port %d in %s mode',
		process.env.PORT,
		app.settings.env
	)
})
