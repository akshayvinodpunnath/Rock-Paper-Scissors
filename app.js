const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

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
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Starting Game');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice,playerSelection);
    let message;
    if (winner === RESULT_DRAW) {
        message = `You picked ${playerSelection}, computer picked ${computerChoice}, therefore you had a draw.`
    } else if (winner === RESULT_PLAYER_WINS) {
        message = `You picked ${playerSelection}, computer picked ${computerChoice}, therefore you WON!!!.`
    } else {
        message = `You picked ${playerSelection}, computer picked ${computerChoice}, therefore you LOST!!!.`
    }
    alert(message);
    gameIsRunning = false;
}

const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    }
    return SCISSORS;
}

const getWinner = function(cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAW
    } else if (
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
    ) {
        return RESULT_PLAYER_WINS
    }
    return RESULT_COMPUTER_WINS;
}

startGameBtn.addEventListener('click', start);