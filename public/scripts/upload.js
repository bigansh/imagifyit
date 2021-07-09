const main_form = document.getElementById('main-form')

const uploader_div = document.getElementById('uploader-div'),
	file = document.getElementById('file'),
	base64URL = document.getElementById('base64URL'),
	uploader_url = document.getElementById('img-url')

const reader = new FileReader()

uploader_div.addEventListener('click', (e) => {
	file.click()
})

file.addEventListener('change', (e) => {
	toBase64(file.files[0])
})

uploader_div.addEventListener('dragover', (e) => {
	e.preventDefault()
})

uploader_div.addEventListener('dragleave', (e) => {
	e.preventDefault()
})

uploader_div.addEventListener('drop', (e) => {
	e.preventDefault()

	if (e.dataTransfer.files.length) toBase64(e.dataTransfer.files[0])
})

const toBase64 = (image) => {
	console.log(image)

	reader.readAsDataURL(image)

	reader.onload = (e) => {
		const result = e.target.result

		base64URL.value = result

		main_form.submit()
	}
}
