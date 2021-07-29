let title_check = false,
	description_check = false,
	url_check = false,
	alias_check = false

const text_pattern = /\w+/
const url_pattern =
	/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

const create_form = document.getElementById('create-form'),
	title_input = document.getElementById('title-input'),
	description_input = document.getElementById('description-input'),
	url_input = document.getElementById('url-input'),
	alias_input = document.getElementById('alias-input'),
	btn_showcase = document.getElementById('btn-showcase')

const title_error = document.getElementById('title-error'),
	description_error = document.getElementById('description-error'),
	url_error = document.getElementById('url-error'),
	alias_error = document.getElementById('alias-error')

const card_type = document.getElementById('select-option'),
	small_card = document.getElementById('card-small'),
	large_card = document.getElementById('card-large')

const card_title = [...document.getElementsByClassName('card-title')],
	card_description = [...document.getElementsByClassName('card-description')]

const errorStyle = (input_field, error_text) => {
	input_field.classList.add('err')
	error_text.classList.add('error')
}

const initialStyle = (input_field, error_text) => {
	input_field.classList.remove('err')
	error_text.classList.remove('error')
}

title_input.addEventListener('input', () => {
	card_title.forEach((title) => {
		title_check = text_pattern.test(title_input.value)

		if (title_input.value.length === 0) {
			title_error.innerText = 'Enter Title here'

			errorStyle(title_input, title_error)
		} else if (!title_check) {
			title.innerHTML = 'Title'
			title_error.innerText =
				'Only alphabet, numbers and underscore are allowed'

			errorStyle(title_input, title_error)
		} else if (title_input.value.length > 52) {
			title_error.innerText = 'Title should not exceed 32 characters'

			errorStyle(title_input, title_error)
		} else {
			title.innerHTML = title_input.value

			initialStyle(title_input, title_error)
		}
	})
})

description_input.addEventListener('input', () => {
	card_description.forEach((description) => {
		description_check = text_pattern.test(description_input.value)

		if (description_input.value.length === 0) {
			title_error.innerText = 'Enter Description here'

			errorStyle(description_input, description_error)
		} else if (!description_check) {
			description.innerHTML = 'Description'
			description_error.innerText =
				'Only alphabet, numbers and underscore are allowed'

			errorStyle(description_input, description_error)
		} else if (description_input.value.length > 256) {
			description_error.innerText =
				'Description should not exceed 256 characters'

			errorStyle(description_input, description_error)
		} else {
			description.innerHTML = description_input.value

			initialStyle(description_input, description_error)
		}
	})
})

url_input.addEventListener('input', () => {
	url_check = url_pattern.test(url_input.value)
	if (url_input.value.length === 0) {
		url_error.innerText = 'Enter Destination URL here'
	} else if (!url_check) {
		url_error.innerText = 'Enter a valid URL (Begins with http:// or https:// )'

		errorStyle(url_input, url_error)
	} else {
		initialStyle(url_input, url_error)
	}
})

alias_input.addEventListener('change', async () => {
	document.getElementById('spin').style.visibility = 'visible'

	const result = await fetch(`/api/alias-check/${alias_input.value}`, {
		method: 'POST',
	})

	document.getElementById('spin').style.visibility = 'hidden'

	const count = await result.json().then((res) => res.count)

	alias_check = text_pattern.test(alias_input.value) && count === 0

	if (!(alias_check || alias_input.value === '')) {
		alias_error.innerText = 'Alias already taken (Try another one)'
		alias_error.style.color = '#ff6347'

		errorStyle(alias_input, alias_error)
	} else {
		alias_error.innerText = 'Alias available!'

		initialStyle(alias_input, alias_error)

		alias_error.style.color = '#28a745'
		alias_error.style.visibility = 'visible'
	}
})

card_type.addEventListener('change', () => {
	if (card_type.value === 'large') {
		small_card.classList.toggle('d-none')
		large_card.classList.toggle('d-none')
	}
	if (card_type.value === 'small') {
		small_card.classList.toggle('d-none')
		large_card.classList.toggle('d-none')
	}
})

btn_showcase.addEventListener('click', () => {
	if (
		title_check &&
		description_check &&
		url_check &&
		(alias_check || alias_input.value === '')
	) {
		create_form.submit()
	} else {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0

		if (!title_check) errorStyle(title_input, title_error)

		if (!description_check) errorStyle(description_input, description_error)

		if (!url_check) errorStyle(url_input, url_error)

		if (!(alias_check || alias_input.value === ''))
			errorStyle(alias_input, alias_error)
	}
})
