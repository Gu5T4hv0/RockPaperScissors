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
// console.log(humanChoice);

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const computerChoice = getComputerChoice(1, 3);
// console.log(computerChoice);

const humanScore = 0;
const computerScore = 0;
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
        computerScore += 1;
    } else if (humanChoice === 1 && computerChoice === 3) {
        return 'You Won! - Human:Rock | Computer:Scissors';
        humanScore += 1;
    } 
    else if (humanChoice === 2 && computerChoice === 1) {
        return 'You Won! - Human:Paper | Computer:Rock';
        humanScore += 1;
    } else if (humanChoice === 2 && computerChoice === 3) {
        return 'You Lost! - Human:Paper | Computer:Scissors';
        computerScore += 1;
    }
    else if (humanChoice === 3 && computerChoice === 1) {
        return 'You Lost! - Human:Scissors | Computer:Rock';
        computerScore += 1;
    } else if (humanChoice === 3 && computerChoice === 2) {
        return 'You Won! - Human:Scissors | Computer:Paper';
        humanScore += 1;
    }
}
// console.log(`${playRound(humanChoice, computerChoice)} \n Human: ${humanScore} Computer: ${computerScore}`);
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

for (let i = 0; i < 5; i++) {
    function playGame(humanSelection, computerSelection, humanScore, computerScore) {
    console.log(`${playRound(humanChoice, computerChoice)} \n Human: ${humanScore} Computer: ${computerScore}`);
}
}

console.log(playGame(humanSelection, computerSelection));
