const grid = document.getElementById('grid'),
	modal_button = document.getElementById('modal-button')

let modalCount = 0

window.onscroll = () => {
	if (document.documentElement.scrollTop > 800 && modalCount === 0) {
		modal_button.click()

		modalCount++
	}
}
