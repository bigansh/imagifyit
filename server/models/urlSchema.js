const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
	title: String,
	description: String,
	image: String,
	cardType: String,
})

module.exports = mongoose.model('URL', urlSchema)
