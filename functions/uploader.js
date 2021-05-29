const OG = require('../models/ogSchema'),
	cloudinary = require('../connections/cloudinaryConnect')

const schema = {
	title: String,
	description: String,
	image: String,
	cardType: String,
	id: String,
}

const uploader = async (data, id) => {
	try {
		const image = await cloudinary.uploader.upload(data.imageStr, {
			upload_preset: 'imagify',
		})

		schema.title = data.title
		schema.description = data.description
		schema.image = image.url
		schema.cardType = data.cardType
		schema.id = id

		return await OG.create(data)
	} catch (err) {
		console.error(err)
	}
}

module.exports = uploader
