const card_type = document.getElementById('select-option'),
	small_card = document.getElementById('card-small'),
	large_card = document.getElementById('card-large'),
	alias = document.getElementById('alias')

const card_title = [...document.getElementsByClassName('card-title')],
	card_description = [...document.getElementsByClassName('card-description')]

const title_input = document.getElementById('title-input'),
	description_input = document.getElementById('description-input')

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

title_input.addEventListener('change', () => {
	card_title.forEach((title) => {
		if (title_input.value === '') title.innerHTML = 'Title'
		else title.innerHTML = title_input.value
	})
})

description_input.addEventListener('change', () => {
	card_description.forEach((description) => {
		if (description_input.value === '') description.innerHTML = 'Description'
		else description.innerHTML = description_input.value
	})
})

alias.addEventListener('change', async () => {
	const result = await fetch(`/api/alias-check/${alias.value}`, {
		method: 'POST',
	})

	console.log(result)
})
