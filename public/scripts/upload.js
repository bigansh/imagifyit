const main_form = document.getElementById('main-form'),
	uploader_form = document.getElementById('uploader-form'),
	resizer_form = document.getElementById('resizer-form')

const uploader_div = document.getElementById('uploader-div'),
	file = document.getElementById('file'),
	base64URL = document.getElementById('base64URL'),
	uploader_url = document.getElementById('img-url')

const canvas = document.getElementById('canvas')

const reader = new FileReader(),
	img = new Image()

uploader_div.addEventListener('click', (e) => {
	file.click()
})

file.addEventListener('change', () => {
	reader.readAsDataURL(file.files[0])

	base64URL.value = result
	setTimeout(() => {
		uploader_text.innerText = 'Image uploaded'
	}, 5000)

	base64URL.value = result

	uploader_form.classList.toggle('d-none')
	resizer_form.classList.toggle('d-none')
})

uploader_url.addEventListener('change', () => {
	uploader_form.classList.toggle('d-none')
	resizer_form.classList.toggle('d-none')
})
