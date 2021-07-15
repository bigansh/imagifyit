let title_check = false,
	description_check = false,
	url_check = false,
	alias_check = false

const text_pattern = /\w+/
const url_pattern = /^http[s]?:\/\//

const card_type = document.getElementById('select-option'),
		small_card = document.getElementById('card-small'),
		large_card = document.getElementById('card-large')

const card_title = [...document.getElementsByClassName('card-title')],
		card_description = [...document.getElementsByClassName('card-description')]

const create_form = document.getElementById('create-form'),
		title_input = document.getElementById('title-input'),
		description_input = document.getElementById('description-input'),
		url_input = document.getElementById('url-input'),
		alias_input = document.getElementById('alias-input'),
		btn_create = document.getElementById('btn-create')

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

// const setBorder = (type, color) => {
// 	type.style.borderColor = color;
// }

title_input.addEventListener('input', () => {
	card_title.forEach((title) => {

		title_check = text_pattern.test(title_input.value)
		if ( !(title_check) ) {
			title.innerHTML = 'Title'
			// setBorder(title_input, 'Tomato')
			title_input.classList.add('err')
		}
		else {
			title.innerHTML = title_input.value
			// setBorder(title_input, 'MediumSeaGreen')
			title_input.classList.remove('err')
		}
	})
})

description_input.addEventListener('input', () => {
	card_description.forEach((description) => {

		description_check = text_pattern.test(description_input.value)
		if ( !(description_check) ) {
			description.innerHTML = 'Description'
			// description_input.style.borderColor = 'Tomato';
			description_input.classList.add('err')
		}
		else {
			description.innerHTML = description_input.value
			// description_input.style.borderColor = 'MediumSeaGreen';
			description_input.classList.remove('err')
		}
	})
})

url_input.addEventListener('input', () => {

	url_check = url_pattern.test(url_input.value)
	if( !(url_check) ) {
		// url_input.style.borderColor = 'Tomato';
		url_input.classList.add('err')
	}
	else {
		// url_input.style.borderColor = 'MediumSeaGreen';
		url_input.classList.remove('err')
	}
})

alias_input.addEventListener('input', async () => {

	const result = await fetch(`/api/alias-check/${alias_input.value}`, {
		method: 'POST',
	})
	
	const count = await result.json().then(res => res.count)
	
	alias_check =  text_pattern.test(alias_input.value) && (count === 0)

	//alert('Alias already in use')
	// if(alias_input.value !== '') {
	if( !( alias_check && alias_input.value==='' ) ) {
		// setBorder(alias_input, 'Tomato')
		alias_input.classList.add('err')
	}

	//alert('Alias ok')
	else //if(count === 0 || alias_input.value === ''){
		// setBorder(alias_input, 'MediumSeaGreen')
		alias_input.classList.remove('err')
	//}
})

btn_create.addEventListener('click', () => {
	if( title_check && description_check && url_check && (alias_check || alias_input.value === '' )) {
		create_form.submit() 
	}
	else {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0

		if( !title_check )
			title_input.classList.add('err')

		if( !description_check )
			description_input.classList.add('err')

		if( !url_check ) 
			url_input.classList.add('err')

		if( alias_check || alias_input.value !== '' )
			alias_input.classList.add('err')
	}
})