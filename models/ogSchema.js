const dynamoose = require('dynamoose')

const ogSchema = new dynamoose.Schema({
	title: String,
	description: String,
	image: String,
	cardType: String,
	id: String,
})

module.exports = dynamoose.model('OG', ogSchema)
