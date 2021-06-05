import loadSelfie from './loadSelfie.js';
import classify from './classify.js';

document.addEventListener('DOMContentLoaded', async () => {
	const img = document.querySelector('#img');
	img.setAttribute('crossOrigin', 'anonymous');
	loadSelfie();
	classify();
});

const nextButton = document.querySelector('#nextbutton');
nextButton.addEventListener('click', async () => {
	loadSelfie();
});
