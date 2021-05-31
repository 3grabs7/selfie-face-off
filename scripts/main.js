import ImageRecognition from './imageRecognition.js'

document.addEventListener('DOMContentLoaded', () => {
	// make api call, load selfies
	console.log('gogogogogo')
})

const go = document.querySelector('#startbutton')
go.addEventListener('click', () => {
	const image = document.querySelector('#img')
	const classify = new ImageRecognition(image)
	const result = classify.run()
})
