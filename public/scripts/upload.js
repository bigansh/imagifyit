const uploader = document.getElementById('uploader')
const uploader_input = document.getElementById('uploader-input')
const upload_form = document.getElementById('upload-form')
const base64URL = document.getElementById('base64URL')

const reader = new FileReader()

uploader_input.addEventListener('change', () => {
	reader.readAsDataURL(uploader_input.files[0])

	reader.onload = (event) => {
		const result = event.target.result

		base64URL.value = result

		upload_form.submit()
	}
})
