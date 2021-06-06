import loadSelfie from './loadSelfie.js';

document.addEventListener('DOMContentLoaded', async () => {
	const img = document.querySelector('#img');
	img.setAttribute('crossOrigin', 'anonymous');
});

const nextButton = document.querySelector('#nextbutton');
nextButton.addEventListener('click', async () => {
	loadSelfie();
});
