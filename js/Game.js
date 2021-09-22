/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlayStartGame = document.getElementById("overlay");
const keyboard = document.getElementById("qwerty");
const scoreboard = document.getElementsByClassName("tries");
const gameOverMessage = document.getElementById("game-over-message");
const winLoseRatio = document.getElementById('wins-loses')
let wins = 0; 
let losses = 0; 

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Live long and prosper"),
      new Phrase("Im Pickle Rick"),
      new Phrase("A Dime A Dozen"), // creates a new phrase object for each phrase
      new Phrase("Scotty Doesnt Know"),
      new Phrase("Close But No Cigar"),
    ];
    this.activePhrase = null;
  }

  /*
    When start game is pushed, this gets a random phrase using the getRandomPhrase() method, hides the overlay, and
    adds the phrase to dispaly 
  */
  startGame() {
    this.activePhrase = this.getRandomPhrase();
    overlayStartGame.style.display = "none";
    this.activePhrase.addPhraseToDisplay();
    winLoseRatio.innerHTML = `Wins: ${wins} Losses ${losses}`
  }

  //gets a random phrase using a random number function
  getRandomPhrase() {
    let rdmNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[rdmNumber];
  }

  /*
    when a key is pressed, the key is disabled, then it checks the letter to the phrase, and updates the class name based on if 
    checkLetter was true or false. If true it runs checkForWin() and if true runs the gameOver method, if checkLetter was false, 
    it removes a heart. 
  */
  handleInteraction(key) {
    key.disabled = true;
    if (this.activePhrase.checkLetter(key.innerHTML)) {
      key.className = "key chosen";
      if (this.checkForWin()) {
        this.gameOver("win"); // if checkForWin() returns true, the game ends
      }
    } else {
      key.className = "key wrong";
      this.removeLife();
    }
  }

  //Replaces a liveHeart.png with lostHeart.png everytime a guess is wrong
  removeLife() {
    scoreboard[this.missed].firstChild.src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) {
      // if total misses get to 5 it ends game.
      this.gameOver("lose");
    }
  }

  /*
    This method is called each time a letter is pressed and returns true of false if the game was won or not. 
    The gameWon varible is set to true, and it loops thru the phrase and if any of 
    the letters still have the "hide" class then gameWon is false. 
  */
  checkForWin() {
    let gameWon = true;
    for (let i = 0; i < phraseTitle.length; i++) {
      if (phraseTitle[i].classList.contains("hide")) {
        gameWon = false;
      }
    }
    return gameWon;
  }

  /*
    When the gameOver method is called, it resets the missed counter to 0, re-displays the overlay,
    and if the outcome parameter is equal to win or lose it changes the class name and updates the Game over message appoperietly.
    It then loops back thru the keyboard and un-disables the keys and clears all the class names back to "key"
    Finally it loops thru and resets all the hearts 
  */
  gameOver(outcome) {
    this.missed = 0;
    overlayStartGame.style.display = "flex";
    addPhrase.firstElementChild.innerHTML = "";

    if (outcome === "lose") {
      overlayStartGame.className = "lose";
      gameOverMessage.innerHTML = `Sorry you lose! The correct phrase was "${this.activePhrase.phrase}"`;
      losses += 1; 
    }

    if (outcome === "win") {
      overlayStartGame.className = "win";
      gameOverMessage.innerHTML = `Congratulations YOU WIN!!`;
      wins += 1; 
    }

    

    for (let i = 0; i < keyLetter.length; i++) {
      keyLetter[i].disabled = false; // loop to reset all the keys back to normal
      keyLetter[i].className = "key";
    }

    for (let i = 0; i < scoreboard.length; i++) {
      scoreboard[i].firstChild.src = "images/liveHeart.png"; // loop to reset all the hearts
    }
  }
}
