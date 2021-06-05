const classifier = ml5.imageClassifier('MobileNet', () => {
	console.log('Tjenna');
});

document.addEventListener('DOMContentLoaded', async () => {
	getSelfiesNames().then(getRandomSelfie).then(displaySelfie);
});

const nextButton = document.querySelector('#nextbutton');
nextButton.addEventListener('click', async () => {
	getSelfiesNames().then(getRandomSelfie).then(displaySelfie);
});

async function getSelfiesNames() {
	const response = await fetch('http://localhost:6969/selfienames');
	const json = await response.json();
	return json.fileNames;
}

async function getRandomSelfie(selfieNames) {
	const index = Math.floor(Math.random() * selfieNames.length);
	const response = await fetch(`http://localhost:6969/${selfieNames[index]}`);
	return response.url;
}

function displaySelfie(imgUrl) {
	const img = document.querySelector('#img');
	img.src = imgUrl;
}

async function classifyImg(element) {}
