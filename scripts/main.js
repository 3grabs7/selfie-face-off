import loadSelfie from './loadSelfie.js';
import GameState from './GameState.js';
export { currentGameState };

const currentGameState = new GameState();

document.addEventListener('DOMContentLoaded', async () => {
	const img = document.querySelector('#img');
	img.setAttribute('crossOrigin', 'anonymous');
});

const nextButton = document.querySelector('#nextbutton');
nextButton.addEventListener('click', async () => {
	// start load screen
	console.log('loading starts here');
	// stop load screen
	const stopLoading = () => {
		console.log('callback here');
	};
	loadSelfie(stopLoading);
});
