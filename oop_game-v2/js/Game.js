/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// New constructor for Game class. 

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = this.createPhrases();
		this.activePhrase = null;
	}

	createPhrases() {
		const phraseObjs = [
			new Phrase('one'),
			new Phrase('two'),
			new Phrase('three'),
			new Phrase('four'),
			new Phrase('five')
			];
		return phraseObjs;
	}

	getRandomPhrase() {
		let randIndex = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[randIndex];
	}

	startGame() { 
		const overlayDiv = document.querySelector('#overlay');
		console.log(overlayDiv);
		overlayDiv.style.display = 'none'; 
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}
}


