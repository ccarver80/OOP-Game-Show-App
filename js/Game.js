/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlayStartGame = document.getElementById("overlay");
const keyboard = document.getElementById('qwerty');
const scoreboard = document.getElementsByClassName('tries')
const gameOverMessage = document.getElementById('game-over-message')


class Game {
    
  constructor() {
    this.missed = 0;
    this.phrases = ["CHris", "lori", "doggy", "froggy", "CAT"];
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
     
    if (this.checkForWin()) {
      this.gameOver("win")
    }

    if (callback) {
    } else {
       
        this.removeLife();
        if (this.missed === 5) {
          this.gameOver("lose")
        } 
    }

   


}

     
  

  removeLife() {
    scoreboard[this.missed].firstChild.src = "images/lostHeart.png"; 
    this.missed += 1; 
    
  }

  checkForWin() {
    let x = true
    for (let i = 0; i < phraseTitle.length; i++) {
      if (phraseTitle[i].classList.contains('hide')) {
         x = false; 
      }
    
  }
    return x; 
}

  gameOver(outcome) {
    if (outcome === "lose") {
      overlayStartGame.style.display = "flex";
      overlayStartGame.className = "lose"
      gameOverMessage.innerHTML = `Sorry you lose! The correct phrase was "${this.activePhrase}"`
      addPhrase.firstElementChild.innerHTML= "";
    } 
    if (outcome === "win") {
      addPhrase.firstElementChild.innerHTML= "";
      overlayStartGame.className = "win"
      overlayStartGame.style.display = "flex";
      gameOverMessage.innerHTML = `Congratulations YOU WIN!!`
    }
  }
}
