const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`,'').toUpperCase();

    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you`)
        return DEFAULT_USER_CHOICE;
    } 
    return selection;
}

const start = () => {
    console.log('Starting Game');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
}

startGameBtn.addEventListener('click', start);