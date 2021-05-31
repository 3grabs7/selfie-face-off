const classifier = ml5.imageClassifier('MobileNet', modeLoaded)

function modeLoaded() {
	console.log('we loaded')
}

export default class ImageRecognition {
	constructor(element) {
		this.element = element
	}

	run() {
		classifier.classify(this.element, (err, results) => {
			return results
		})
	}
}
