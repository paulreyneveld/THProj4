/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.startGame();
// console.log(game.activePhrase.phrase);

let game;
let button = document.querySelector('#btn__reset');

button.addEventListener('click', (e) => {
	game = new Game();
	game.startGame();
});

