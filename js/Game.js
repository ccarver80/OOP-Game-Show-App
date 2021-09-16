/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlayStartGame = document.getElementById('overlay');
const startButton = document.getElementById("btn__reset"); 

class Game {
    constructor(missed, phrases, activePhrase, ) {
        this.missed = missed;
        this.phrases = phrases; 
        this.activePhrase = activePhrase; 

    }

    startGame() {
        overlayStartGame.style.display = "none"; 
        this.getRandomPhrase()
    }

    getRandomPhrase() {
        let rdmNumber = Math.floor(Math.random() * this.phrases.length)
        this.activePhrase = this.phrases[rdmNumber]; 
        console.log(this.activePhrase); 
    }
}

const testStart = new Game(0, ["poop", "doop", "loop", "foop", "goop"], )

 
startButton.addEventListener('click', () => {testStart.startGame()})