const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const getPlayerChoice = function() {
    const selection = prompt('Rock, Paper or Scissors?');

    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert('Invalid Choice! We chose Rock for you')
    }
}

const start = () => {
    console.log('Starting Game')
}

startGameBtn.addEventListener('click', start);