export default function classify() {
	const img = document.querySelector('#img');
	const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
	classifier.classify(img, (err, results) => {
		displayClassification(results);
	});
}

function displayClassification(classification) {}

function modelLoaded() {
	console.log('made it');
}
