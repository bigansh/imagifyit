const cloudinary = require('../connections/cloudinaryConnect')

const mixpanel = require('../connections/mixpanelConnect')

const uploader = async (data) => {
	try {
		mixpanel.track('Image Uploaded')

		const image = await cloudinary.uploader.upload(data, {
			upload_preset: 'imagify',
		})

		return image.url
	} catch (err) {
		throw new Error(err)
	}
}

module.exports = uploader
