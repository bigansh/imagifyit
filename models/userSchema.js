const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
	email: String,
	image: String,
	name: String,
	id: String,
	urls: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'URLs',
		},
	],
})

module.exports = mongoose.model('User', userSchema)
