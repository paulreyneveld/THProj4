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

	/**
	 * Creates phrases for use in game
	 * @return {array} An array of phrases that could be used in the game
	 */
	createPhrases() {
		const phraseObjs = [
			new Phrase('Break a leg'),
			new Phrase('On the ball'),
			new Phrase('Live and learn'),
			new Phrase('Easy does it'),
			new Phrase('Hit the sack')
			];
		return phraseObjs;
	};

	/**
	 * Selects random phrase from phrases property
	 * @return {Object} Phrase object chosen to be used
	 */
	getRandomPhrase() {
		let randIndex = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[randIndex];
	};

	/**
	 * Begins game by selecting a random phrase and displaying it to user
	 */
	startGame() { 
		const overlayDiv = document.querySelector('#overlay');
		overlayDiv.style.display = 'none'; 
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	};

	/**
	 * Checks for winning move
	 * @return {boolean} True if game has been won, false if game wasn't won
	 */
	checkForWin() {
		const hiddenLis = document.querySelectorAll('.hide.letter');
		return (hiddenLis.length === 0 ? true : false);
	};

	/**
	 * Increases the value of the missed property
	 * Removes a life from the scoreboard
	 * Checks if player has remaining lives and ends game if player is out
	 */
	removeLife() {
		this.missed += 1;
		let heartImg = document.querySelector('img[src="images/liveHeart.png"]');
		heartImg.src = 'images/lostHeart.png';
		if (this.missed == 5) {
			this.gameOver(false);
		}
		
	};

	/**
	 * Displays game over message
	 * @param {boolean} gameWon - Whether or not the user won the game
	 */
	gameOver(gameWon) {
		const overlayDiv = document.querySelector('#overlay');
		const overlayH1 = document.querySelector('#overlay h1');
		overlayDiv.style.display = 'block'; 
		if (gameWon) {
			overlayH1.innerText = 'You win';
			overlayDiv.className = 'win';
		}
		else {
			overlayH1.innerText = 'You lost';
			overlayDiv.className = 'lose';
		}
	};

	/**
	 * Handles onscreen keyboard button clicks
	 * @param (HTMLButtonElement) button - The clicked button element
	 */
	handleInteraction(button) {
        button.disabled = true;
        if (!game.activePhrase.checkLetter(button.innerText)) {
                button.className = 'wrong';
                game.removeLife();
        }
        if (game.activePhrase.checkLetter(button.innerText)) {
                button.className = 'chosen';
                game.activePhrase.showMatchedLetter(button.innerText);
                if (game.checkForWin()) {
                        game.gameOver(true);
                }
        }
	};
}


