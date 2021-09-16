/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const addPhrase = document.getElementById("phrase");

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
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

  checkLetter() {}

  showMatchedLetter() {}
}

const testPhrase = new Phrase("Poopy Butthole");

testPhrase.addPhraseToDisplay();
