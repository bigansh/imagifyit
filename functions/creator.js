const OpenGraph = require('../models/ogSchema')

const ogSchema = require('../schema/og')

const creator = async (ogDetails) => {
	console.log(ogDetails)

	ogSchema.cardType = ogDetails.card
	ogSchema.description = ogDetails.description
	ogSchema.image = ogDetails.image
	ogSchema.title = ogDetails.title
	ogSchema.id = ogDetails.alias
	ogSchema.destination = ogDetails.destination

	try {
		return await OpenGraph.create(ogSchema)
	} catch (error) {
		throw new Error(error)
	}
}

module.exports = creator
