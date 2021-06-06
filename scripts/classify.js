import loadSelfie from './loadSelfie.js';

const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

export default function classify() {
	const img = document.querySelector('#img');
	classifier.classify(img, (err, results) => {
		displayClassification(results);
	});
}

function displayClassification(classification) {
	const classifyDiv = document.querySelector('.main_classifications');

	while (classifyDiv.firstChild) {
		classifyDiv.removeChild(classifyDiv.lastChild);
	}

	Array.from(classification)
		.map((e) => e.label)
		.map((label) => label.split(/[,]/)[0])
		.forEach((label) => {
			const labelDiv = document.createElement('div');
			labelDiv.className = 'main_classifications_item';
			labelDiv.innerText = label;
			classifyDiv.append(labelDiv);

			// add event handlers for each labels
			// points system for getting closest to ml5s predictions
		});
}

function modelLoaded() {
	loadSelfie();
}
