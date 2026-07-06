function getHumanChoice() {
    const choice = prompt("Rock Paper Scissors: ");
    if (choice.toLowerCase() === 'rock') {
        return 1;
    } else if (choice.toLowerCase() === 'paper') {
        return 2;
    } else if (choice.toLowerCase() === 'scissors') {
        return 3;
    }
}
const humanChoice = getHumanChoice();
console.log(humanChoice);

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const computerChoice = getComputerChoice(1, 3);
console.log(computerChoice);

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 1 && computerChoice === 1) {
        return 'Tie! - Human:Rock | Computer:Rock';
    } else if (humanChoice === 2 && computerChoice === 2) {
        return 'Tie! - Human:Paper | Computer:Paper';
    } else if (humanChoice === 3 && computerChoice === 3) {
        return 'Tie! - Human:Scissors | Computer:Scissors';
    }
    else if (humanChoice === 1 && computerChoice === 2) {
        return 'You Lost! - Human:Rock | Computer:Paper';
    } else if (humanChoice === 1 && computerChoice === 3) {
        return 'You Won! - Human:Rock | Computer:Scissors';
    } 
    else if (humanChoice === 2 && computerChoice === 1) {
        return 'You Won! - Human:Paper | Computer:Rock';
    } else if (humanChoice === 2 && computerChoice === 3) {
        return 'You Lost! - Human:Paper | Computer:Scissors';
    }
    else if (humanChoice === 3 && computerChoice === 1) {
        return 'You Lost! - Human:Scissors | Computer:Rock';
    } else if (humanChoice === 3 && computerChoice === 2) {
        return 'You Won! - Human:Scissors | Computer:Paper';
    }
}
console.log(playRound());

const humanScore = 0;
const computerScore = 0;

