const grid = document.getElementById('grid'),
	modal_button = document.getElementById('modal-button')

// TODO Fix the window.scrollTop() not a function error
window.onscroll = () => {
	// if (window.scrollTop() > 1000) modal_button.click()
}

window.twttr = ((d, s, id) => {
	let t,
		js,
		fjs = d.getElementsByTagName(s)[0]
	if (d.getElementById(id)) return
	js = d.createElement(s)
	js.id = id
	fjs.parentNode.insertBefore(js, fjs)
	return (
		window.twttr ||
		(t = {
			_e: [],
			ready: (f) => {
				t._e.push(f)
			},
		})
	)
})(document, 'script', 'twitter-wjs')

twttr.ready(function (twttr) {
	twttr.events.bind('loaded', (event) => {
		const msnry = new Masonry(grid, {
			fitWidth: true,
			itemSelector: '.grid-item',
			columnWidth: 60,
		})
	})
})