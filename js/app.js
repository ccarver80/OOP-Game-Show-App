/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById("btn__reset");
const game = new Game();


startButton.addEventListener('click', () => {
    const phrase = new Phrase(game.startGame());
    phrase.addPhraseToDisplay();`` 
    
    for (let i = 0; i < keyLetter.length; i++) {
        keyLetter[i].addEventListener('click', (e) => {
            game.handleInteraction(keyLetter[i], phrase.checkLetter(e.target.innerHTML));
        })
    }

})



