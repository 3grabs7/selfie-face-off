import classify from './classify.js';

const ERROR_IMG = 'https://i.redd.it/swcvl4m336f51.png';

export default async function loadSelfie(loadingCallback) {
	try {
		const selfieNames = await getSelfiesNames();
		const randomSelfie = await getRandomSelfie(selfieNames);
		displaySelfie(randomSelfie, loadingCallback);
	} catch {
		console.log('start server n00b');
		displaySelfie(undefined);
	}
}

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

function displaySelfie(imgUrl, loadingCallback) {
	const img = document.querySelector('#img');
	if (imgUrl !== undefined) {
		img.src = imgUrl;
		img.addEventListener('load', () => {
			classify();
			loadingCallback();
		});
		return;
	}
	img.src = ERROR_IMG;
}
