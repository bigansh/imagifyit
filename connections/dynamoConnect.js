const dynamoose = require('dynamoose'),
	dotenv = require('dotenv').config()

const dynamoDB = new dynamoose.aws.sdk.DynamoDB({
	accessKeyId: process.env.ACCESS_KEY,
	secretAccessKey: process.env.SECRET_ACCESS_KEY,
	region: 'us-east-1',
})
const dbConnect = () => {
	dynamoose.aws.ddb.set(dynamoDB)
}

module.exports = dbConnect
