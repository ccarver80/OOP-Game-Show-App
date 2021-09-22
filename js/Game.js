/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlayStartGame = document.getElementById("overlay");
const keyboard = document.getElementById("qwerty");
const scoreboard = document.getElementsByClassName("tries");
const gameOverMessage = document.getElementById("game-over-message");

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = ["CHris", "lori", "doggy", "froggy", "CAT"]; // Temp phrases 
    this.activePhrase = null;
  }

  startGame() {
    this.getRandomPhrase();
    overlayStartGame.style.display = "none";
    return this.activePhrase;
  }

  getRandomPhrase() {
    let rdmNumber = Math.floor(Math.random() * this.phrases.length);
    this.activePhrase = this.phrases[rdmNumber];
  }

  handleInteraction(key, callback) {
    key.disabled = true;

    if (callback) {
      key.className = "key chosen";
      if (this.checkForWin()) {
        this.gameOver("win");
      }
    } else {
      key.className = "key wrong";
      this.removeLife();
    }
  }

  removeLife() {
    scoreboard[this.missed].firstChild.src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver("lose");
    }
  }

  checkForWin() {
    let x = true;
    for (let i = 0; i < phraseTitle.length; i++) {
      if (phraseTitle[i].classList.contains("hide")) {
        x = false;
      }
    }
    return x;
  }

  gameOver(outcome) {
    if (outcome === "lose") {
      overlayStartGame.className = "lose";
      gameOverMessage.innerHTML = `Sorry you lose! The correct phrase was "${this.activePhrase}"`;
    }

    if (outcome === "win") {
      overlayStartGame.className = "win";
      gameOverMessage.innerHTML = `Congratulations YOU WIN!!`;
    }
    this.missed = 0;
    this.activePhrase = null;
    overlayStartGame.style.display = "flex";
    addPhrase.firstElementChild.innerHTML = "";

    for (let i = 0; i < keyLetter.length; i++) {
      keyLetter[i].disabled = false;
      keyLetter[i].className = "key";
    }

    for (let i = 0; i < scoreboard.length; i++) {
      scoreboard[i].firstChild.src = "images/liveHeart.png";
    }
  }
}
