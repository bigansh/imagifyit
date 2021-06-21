const dynamoose = require('dynamoose')

const ogSchema = new dynamoose.Schema({
	id: String,
	title: String,
	description: String,
	image: String,
	cardType: String,
	destination: String,
})

module.exports = dynamoose.model('OpenGraph', ogSchema)
