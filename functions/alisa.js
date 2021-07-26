const dynamoose = require('dynamoose')

const OpenGraph = require('../models/ogSchema')

const mixpanel = require('../connections/mixpanelConnect')

const aliasCheck = async (alias) => {
	const condition = new dynamoose.Condition().filter('id').eq(alias)

	try {
		mixpanel.track('Alias Checked')

		// ! This returns the info if doc exists otherwise undefined
		// const result = await OpenGraph.get(alias)

		// ! This returns a much detailed info about the alias
		const result = await OpenGraph.query(condition).exec()

		return result.count
	} catch (error) {
		throw new Error(error)
	}
}

module.exports = aliasCheck
