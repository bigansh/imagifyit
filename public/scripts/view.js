const link = document.getElementById('link'),
	button = document.getElementById('copy')

const range = document.createRange()

const copyFunction = () => {
	range.selectNode(link)

	window.getSelection().removeAllRanges()
	window.getSelection().addRange(range)

	document.execCommand('copy')

	window.getSelection().removeAllRanges()

	button.innerHTML = 'Copied!'
}

button.addEventListener('click', copyFunction)
