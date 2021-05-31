import ImageRecognition from './imageRecognition.js'

document.addEventListener('DOMContentLoaded', () => {
	// make api call, load selfies
	console.log('gogogogogo')
})

const nextButton = document.querySelector('#nextbutton')
nextButton.addEventListener('click', async () => {
	const img = document.querySelector('#img')
	const res = await getRandomSelfie()
	console.log(res.URL)
	img.src = res.URL
	// const classify = new ImageRecognition(img)
	// const result = classify.run()
})

async function getRandomSelfie() {
	const response = await fetch('http://localhost:6969/selfie')
	const json = await response.json()
	return json
}
