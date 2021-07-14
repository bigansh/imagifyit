const text_pattern = /\w+/
const url_pattern = /^http[s]{0,1}?:\/\//

const card_type = document.getElementById('select-option'),
		small_card = document.getElementById('card-small'),
		large_card = document.getElementById('card-large')

const card_title = [...document.getElementsByClassName('card-title')],
		card_description = [...document.getElementsByClassName('card-description')]

const create_form = document.getElementById('create-form'),
		title_input = document.getElementById('title-input'),
		description_input = document.getElementById('description-input'),
		url_input = document.getElementById('url-input'),
		alias_input = document.getElementById('alias'),
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

const setBorder = (type, color) => {
	type.style.borderColor = color;
}

title_input.addEventListener('input', () => {
	card_title.forEach((title) => {
		if ( !(text_pattern.test(title_input.value)) ) {
			title.innerHTML = 'Title'
			setBorder(title_input, 'Tomato')
		}
		else {
			title.innerHTML = title_input.value
			setBorder(title_input, 'MediumSeaGreen')
		}
	})
})

description_input.addEventListener('input', () => {
	card_description.forEach((description) => {
		if ( !(text_pattern.test(description_input.value)) ) {
			description.innerHTML = 'Description'
			description_input.style.borderColor = 'Tomato';
		}
		else {
			description.innerHTML = description_input.value
			description_input.style.borderColor = 'MediumSeaGreen';
		}
	})
})

url_input.addEventListener('input', () => {
	if( !(url_pattern.test(url_input.value)) ) {
		url_input.style.borderColor = 'Tomato';
	}
	else {
		url_input.style.borderColor = 'MediumSeaGreen';
	}
})

alias_input.addEventListener('input', async () => {

	const result = await fetch(`/api/alias-check/${alias_input.value}`, {
		method: 'POST',
	})

	const count = await result.json().then(res => res.count)

	//alert('Alias already in use')
	// if(alias_input.value !== '') {
	if(count !== 0) {
		setBorder(alias_input, 'Tomato')
	}

	//alert('Alias ok')
	else if(count === 0){
		setBorder(alias_input, 'MediumSeaGreen')
	}
})

btn_create.addEventListener('click', () => {
	if(title_input.value !== '')
		create_form.submit()
	else 
		console.log('Works');
})