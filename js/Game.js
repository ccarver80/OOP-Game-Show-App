/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlayStartGame = document.getElementById("overlay");
const keyboard = document.getElementById('qwerty');


class Game {
    
  constructor() {
    this.missed = 0;
    this.phrases = ["CHris", "lori", "doggy", "froggy", "CAT"];
    this.activePhrase = null;
  }


  startGame() {
    this.getRandomPhrase();
      overlayStartGame.style.display = "none";
      const phrase = new Phrase(this.activePhrase);
        phrase.addPhraseToDisplay(); 
  }

  getRandomPhrase() {
    let rdmNumber = Math.floor(Math.random() * this.phrases.length);
    this.activePhrase = this.phrases[rdmNumber];
  }

  handleInteraction(key) {
    key.disabled = true; 
    if (phrase.checkLetter(key.innerHTML)) {
        console.log('TRUUUEEE')
    } else {
        this.removeLife();
    }
}

     
  

  removeLife() {
      console.log("removed heart")
  }
}


