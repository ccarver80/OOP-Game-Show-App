/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const addPhrase = document.getElementById("phrase");
const keyLetter = document.getElementsByClassName("key");
const phraseTitle = document.getElementsByClassName("letter");
let correctLetter = false;

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase(); //changes phrase to all lowercase
  }

  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] === " ") {
        let li = document.createElement("li");
        li.setAttribute("class", "space");
        let letter = document.createTextNode(" ");
        li.appendChild(letter);
        addPhrase.firstElementChild.appendChild(li);
      } else {
        let li = document.createElement("li");
        li.setAttribute("class", `hide letter ${this.phrase[i]}`);
        let letter = document.createTextNode(`${this.phrase[i]}`);
        li.appendChild(letter);
        addPhrase.firstElementChild.appendChild(li);
      }
    }
  }

  checkLetter(letter) {
    for (let i = 0; i < this.phrase.length; i++) {
      if (letter === this.phrase[i]) {
        this.showMatchedLetter(this.phrase[i]);
        return true;
      }
    }
  }

  showMatchedLetter(matchedLetter) {
    for (let i = 0; i < phraseTitle.length; i++) {
      if (phraseTitle[i].innerHTML === matchedLetter) {
        phraseTitle[i].className = `show letter ${matchedLetter}`;
      }
    }
  }
}
