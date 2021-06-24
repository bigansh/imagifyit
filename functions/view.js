const OpenGraph = require('../models/ogSchema')

const viewOg = async (alias) => {
	try {
		const result = await OpenGraph.get(alias)

		return result
	} catch (error) {
		throw new Error(error)
	}
}

module.exports = viewOg
