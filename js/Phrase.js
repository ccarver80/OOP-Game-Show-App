/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const addPhrase = document.getElementById("phrase");
const keyLetter = document.getElementsByClassName("key");
const phraseTitle = document.getElementsByClassName('letter');

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

  checkLetter() {
    let phraseSplit = this.phrase.split(""); //Splits phrase into a array 

    //loop thru each button and add a event listener to it 
    for (let i = 0; i < keyLetter.length; i++) {
      keyLetter[i].addEventListener("click", (e) => {

        //loops thru phrase array and check to see if innerHTML matches letter picked 
        for (let i = 0; i < phraseSplit.length; i++) {
          if (e.target.innerHTML === phraseSplit[i]) {
            this.showMatchedLetter(phraseSplit[i]); 
          } 
        }
      });
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

const testPhrase = new Phrase("I Love Jessica");


testPhrase.addPhraseToDisplay();

testPhrase.checkLetter();
