/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById("btn__reset");



startButton.addEventListener('click', () => {
    const game = new Game();
    game.startGame(); 
})


for (let i = 0; i < keyLetter.length; i++) {
    keyLetter[i].addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    })
}
