const grid = document.getElementById('grid'),
	modal_button = document.getElementById('modal-button')

let modalCount = 0
window.onscroll = () => {
	if (document.documentElement.scrollTop > 500 && modalCount == 0) {
		modal_button.click()

		modalCount++
	}
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
