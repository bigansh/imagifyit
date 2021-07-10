const main_form = document.getElementById('main-form')

const uploader_div = document.getElementById('uploader-div'),
	file = document.getElementById('file'),
	base64URL = document.getElementById('base64URL'),
	uploader_url = document.getElementById('img-url'),
	uploader_text = document.getElementById("uploader-text")

const reader = new FileReader()

uploader_div.addEventListener('click', (e) => {
	file.click()
})

file.addEventListener('change', (e) => {
	toBase64(file.files[0])
})

uploader_div.addEventListener('dragover', (e) => {
	e.preventDefault()
	uploader_div.style.borderStyle = 'dashed'
})

uploader_div.addEventListener('dragleave', (e) => {
	e.preventDefault()
	uploader_div.style.borderStyle = 'solid'
})

uploader_div.addEventListener('drop', (e) => {
	e.preventDefault()

	if (e.dataTransfer.files.length) 
		toBase64(e.dataTransfer.files[0])
})

const toBase64 = (image) => {
	uploader_text.innerText = "Uploading..."

	reader.readAsDataURL(image)

	reader.onload = (e) => {
		const result = e.target.result

		base64URL.value = result

		setTimeout(() => {
			uploader_text.innerText = "Image uploaded"
		 }, 5500)

		main_form.submit()
	}
}
