/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// The majority of the accompanying comments are cribbed from the
// project walkthrough and seemed to be sufficiently explanatory. 

// New constructor for the Phrase class. 

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	};

	/**
	 * Display phrase on game board
	 */
	addPhraseToDisplay() {
		const ul = document.querySelector('UL');
		for (let i = 0; i < this.phrase.length; i += 1) {
			let newLi = document.createElement('LI');
			if (this.phrase[i] == ' ') {
				newLi.className = `hide space`;
			}
			else {
				newLi.className = `hide letter ${this.phrase[i]}`;
				newLi.innerText = `${this.phrase[i]}`;
			}
			ul.appendChild(newLi);
		}
	};

	/**
	 * Checks if passed letter is in phrase
	 * @param (string) letter - Letter to check
	 */
	checkLetter(letter) {
		for (let i = 0; i <  this.phrase.length; i += 1) {
			if (this.phrase[i] === letter) {
				return true;
			}
		}
		return false;
	};

	/**
	 * Displays passed letter on screen after a match is found
	 * @param (string) letter - Letter to display
	 */
	showMatchedLetter(letter) {
		let liMatches = document.querySelectorAll('LI.letter');
		for (let i = 0; i < liMatches.length; i += 1) {
			if (liMatches[i].className[12] === letter) {
				liMatches[i].className = 'show';
			}
		}

	};
}
