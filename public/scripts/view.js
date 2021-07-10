const link = document.getElementById('link')

const range = document.createRange()

link.addEventListener('click', () => {
	range.selectNode(document.getElementById('link'))

	window.getSelection().removeAllRanges()
	window.getSelection().addRange(range)

	document.execCommand('copy')

	window.getSelection().removeAllRanges()
})
