const uploader = document.getElementById('uploader')
const uploader_input = document.getElementById('uploader-input')
const uploader_text = document.getElementById('uploader-text')
const upload_form = document.getElementById('upload-form')
const base64URL = document.getElementById('base64URL')

uploader.addEventListener('click', e => {
	uploader_input.click();
});

const reader = new FileReader()

uploader_input.addEventListener('change', () => {
	uploader_text.innerText = 'Uploading...'
	reader.readAsDataURL(uploader_input.files[0])

	reader.onload = (event) => {
		const result = event.target.result

		base64URL.value = result
		setTimeout(() =>{
			uploader_text.innerText = 'Image uploaded'
		}, 5000)
		
		upload_form.submit()
	}
})
