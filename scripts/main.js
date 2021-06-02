const classifier = ml5.imageClassifier('MobileNet', () => {
	console.log("Tjenna")
})
let imgNames
document.addEventListener('DOMContentLoaded', async () => {
	const response = await fetch('http://localhost:6969/selfienames')
	const json = await response.json()
	imgNames = json.fileNames
})

const nextButton = document.querySelector('#nextbutton')
nextButton.addEventListener('click', async () => {
	const img = document.querySelector('#img')
	const imgUrl = await getRandomSelfie()
	img.src = imgUrl

	classifier.classify(img, (err, results) => {
		console.log(results)
	})

})

// Get all img names -> pick random
async function getRandomSelfie() {
	const index = Math.floor(Math.random() * imgNames.length)
	const response = await fetch(`http://localhost:6969/${imgNames[index]}`)
	return response.url
}

