/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const addPhrase = document.getElementById("phrase");
const keyLetter = document.getElementsByClassName("key");
const phraseTitle = document.getElementsByClassName("letter");

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase(); //changes phrase to all lowercase
  }

  /*
    Get the phrase and creates li elements, and adds classes to each letter and appends them to ul element in the HTML 
  */
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

  // Checks each letter to each keyboard letter and if matched calls the showMatched letter method
  checkLetter(letter) {
    for (let i = 0; i < this.phrase.length; i++) {
      if (letter === this.phrase[i]) {
        this.showMatchedLetter(this.phrase[i]);
        return true;
      }
    }
  }

  //If checkletter method is true it passes in which letter to display and changes the class name
  showMatchedLetter(matchedLetter) {
    for (let i = 0; i < phraseTitle.length; i++) {
      if (phraseTitle[i].innerHTML === matchedLetter) {
        phraseTitle[i].className = `show letter ${matchedLetter}`;
      }
    }
  }
}
