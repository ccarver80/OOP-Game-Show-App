/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById("btn__reset");
let game; //declare a game varible to use in a global scope outside of my startButton event listener

// Creates a new Game object when start button is pressed
startButton.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

// adds an event listener to each keyboard letter and calls the handleInteraction method and passes in the letter pressed
for (let i = 0; i < keyLetter.length; i++) {
  keyLetter[i].addEventListener("click", (e) => {
    game.handleInteraction(keyLetter[i]);
  });
}

//Keyboard event listener to check each key letter for the corresponding onscreen keyletter and handling the interaction
document.addEventListener("keyup", (e) => {
  for (let i = 0; i < keyLetter.length; i++) {
    if (e.key === keyLetter[i].innerHTML) {
      game.handleInteraction(keyLetter[i]);
    }
  }
});
