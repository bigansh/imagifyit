const uploader = document.getElementById('uploader')
const uploader_input = document.getElementById('uploader-input')
const upload_form = document.getElementById('upload-form')

const reader = new FileReader()

uploader_input.addEventListener('change', () => {
	reader.readAsDataURL(uploader_input.files[0])
	reader.onload = (event) => {
		const base64URL = event.target.result.split(',')[1]
		
		fetch('/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				base64URL,
			}),
		})
	}
})

// upload_form.addEventListener('submit', (event) => {
// 	event.preventDefault()
// 	console.log(base64URL)
// })
