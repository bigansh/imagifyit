const grid = document.getElementById('grid'),
	modal_button = document.getElementById('modal-button')

const msnry = new Masonry(grid, {
	itemSelector: '.grid-item',
	columnWidth: 60,
})

// TODO Fix the window.scrollTop() not a function error
window.onscroll = () => {
	// if (window.scrollTop() > 1000) modal_button.click()
}
