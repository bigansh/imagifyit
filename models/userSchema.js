const dynamoose = require('dynamoose')
const OG = require('./ogSchema')

const userSchema = dynamoose.Schema({
	email: String,
	image: String,
	name: String,
	id: String,
	OGs: [
		{
			type: Object,
			Schema: OG,
		},
	],
})

module.exports = dynamoose.model('User', userSchema)
