/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// New constructor for the Phrase class. 

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	addPhraseToDisplay() {
		const ul = document.querySelector('UL');
		for (let i = 0; i < this.phrase.length; i += 1) {
			let newLi = document.createElement('LI');
			newLi.className = `hide letter ${this.phrase[i]}`;
			newLi.innerText = `${this.phrase[i]}`;
			ul.appendChild(newLi);
		}
	}

}
