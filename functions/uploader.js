const cloudinary = require('../connections/cloudinaryConnect')

const uploader = async (data) => {
	try {
		const image = await cloudinary.uploader.upload(data, {
			upload_preset: 'imagify',
		})

		return image.url
	} catch (err) {
		throw new Error(err)
	}
}

module.exports = uploader
