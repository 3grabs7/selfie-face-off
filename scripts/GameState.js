import loadSelfie from './loadSelfie.js';

export default class GameState {
	constructor() {
		this.name = '';
		this.score = 0;
		this.failsLeft = 3;
	}

	setCorrectAnswer(answer) {
		this.correctAnswer = answer;
	}

	guess(guess) {
		if (this.correctAnswer === guess) {
			this.score++;
			console.log(`Score : ${this.score}`);
		} else {
			this.failsLeft--;
			console.log(`Guesses left : ${this.failsLeft}`);
		}
		if (this.failsLeft < 0) {
			this.gameOver();
			return;
		}

		loadSelfie();
	}

	gameOver() {
		console.log(`Game over! ${this.name}, you got ${this.score} correct.`);
		// Save this.name with this.score
	}
}
