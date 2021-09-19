/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const addPhrase = document.getElementById("phrase");
const keyLetter = document.getElementsByClassName("key");
const phraseTitle = document.getElementsByClassName('letter');
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
    let phraseSplit = this.phrase.split(""); //Splits phrase into a array 


    //loop thru each button and add a event listener to it 
    
        //loops thru phrase array and check to see if innerHTML matches letter picked 
        for (let i = 0; i < phraseSplit.length; i++) {
          if (letter === phraseSplit[i]) {
            this.showMatchedLetter(phraseSplit[i]); 
            return true;
          } else {
            return false; 
          }
        }
        
      };
 
  showMatchedLetter(matchedLetter) {
    for (let i = 0; i < phraseTitle.length; i++) {
      if (phraseTitle[i].innerHTML === matchedLetter) {
        phraseTitle[i].className = `show letter ${matchedLetter}`; 
      }
    }
  }
}





