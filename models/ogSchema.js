const mongoose = require('mongoose')

const ogSchema = mongoose.Schema({
	title: String,
	description: String,
	image: String,
	cardType: String,
	id: String,
})

module.exports = mongoose.model('OG', ogSchema)
