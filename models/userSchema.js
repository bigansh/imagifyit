const dynamoose = require('dynamoose')

const OpenGraph = require('./ogSchema')

const userSchema = new dynamoose.Schema({
	id: String,
	email: String,
	image: String,
	name: String,
	OGs: {
		type: Array,
		schema: [OpenGraph],
	},
})

module.exports = dynamoose.model('User', userSchema)
