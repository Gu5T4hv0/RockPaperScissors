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

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const computerChoice = getComputerChoice(1, 3);

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice)
}

const humanScore = 0;
const computerScore = 0;

