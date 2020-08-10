/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// The majority of the accompanying comments are cribbed from the
// project walkthrough and seemed to be sufficiently explanatory. 

// Initialize variable for global use. 
let game;

// Start button event listener begins by resetting
// the game, and then creating a new instance of it. 

let startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', (e) => {
	const resetUl = document.querySelector('#phrase ul');
	resetUl.innerHTML = '';
 	
	const resetButtons = document.querySelectorAll('#qwerty button');
	resetButtons.forEach((button) => {
		button.className = 'key'; 
		button.disabled = false;
	});	

	const resetHearts = document.querySelectorAll('.tries');
	resetHearts.forEach(heart => heart.children[0].src = 'images/liveHeart.png');

	game = new Game();
	game.startGame();
});

// Keyboard event listener calls the handle interaction
// method when the user selects a button from the 
// onscreen keyboard through event bubbling.

const keyboard = document.querySelector('#qwerty');
keyboard.addEventListener('click', (e) => {
	if (e.target.className === 'key') {
		game.handleInteraction(e.target);
	}
});


