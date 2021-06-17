const mongoose = require('mongoose')

const dbConnect = (databaseURL) => {
	mongoose
		.connect(databaseURL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		})
		.then(() => {
			console.log('Connected to DB')
		})
		.catch((err) => {
			console.log('ERROR:', err.message)
		})
}

module.exports = dbConnect
