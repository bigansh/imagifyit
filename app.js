const express = require('express'),
	dotenv = require('dotenv').config(),
	expressSanitizer = require('express-sanitizer'),
	slashes = require('connect-slashes'),
	helmet = require('helmet'),
	app = express()

const dynamoConnect = require('./connections/dynamoConnect')

const authRoute = require('./router/authRoute'),
	dashboardRoute = require('./router/dashboardRoute'),
	redirectRoute = require('./router/redirectRoute'),
	legalRoute = require('./router/legalRoute'),
	createRoute = require('./router/createRoute'),
	viewRoute = require('./router/viewRoute'),
	indexRoute = require('./router/indexRoute'),
	apiRoute = require('./router/apiRoute')

dynamoConnect()

app.set('view engine', 'ejs')

app.use(express.static('public', { extensions: ['html'] }))
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ limit: '5mb', extended: true }))
app.use(expressSanitizer())
app.use(slashes(false))
app.use(
	helmet({
		contentSecurityPolicy: false,
	})
)

app.use((err, req, res, next) => {
	if (err.type === 'entity.too.large')
		res.send(
			'<p align="center">Please upload an image below the defined limit of 5 MB. <br> Click <a href="/create">here</a> to visit the upload page again.</p>'
		)
	else res.redirect('/')
})

app.use('/', indexRoute)
app.use('/auth', authRoute)
app.use('/create', createRoute)
app.use('/view', viewRoute)
app.use('/dashboard', dashboardRoute)
app.use('/legal', legalRoute)
app.use('/api', apiRoute)
app.use('/:slug', redirectRoute)

app.listen(process.env.PORT, () => {
	console.log(
		'Listening on port %d in %s mode',
		process.env.PORT,
		app.settings.env
	)
})
