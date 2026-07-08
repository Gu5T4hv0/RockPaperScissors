function getHumanChoice() {
    const choice = String(prompt("Rock Paper Scissors: "));
    return choice.toLowerCase();
}

function getComputerChoice(min, max) {
    const computerNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (computerNumber === 1) {
        return 'rock';
    } else if (computerNumber === 2) {
        return 'paper';
    } else if (computerNumber === 3) {
        return 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {

    if (humanChoice === 1 && computerChoice === 1) {
        console.log('Tie! - Human:Rock | Computer:Rock');
    } else if (humanChoice === 2 && computerChoice === 2) {
        console.log('Tie! - Human:Paper | Computer:Paper');
    } else if (humanChoice === 3 && computerChoice === 3) {
        console.log('Tie! - Human:Scissors | Computer:Scissors');
    }
    else if (humanChoice === 1 && computerChoice === 2) {
        computerScore += 1;
        console.log('You Lost! - Human:Rock | Computer:Paper');
        console.log(`Computer: ${computerScore}`);
    } else if (humanChoice === 1 && computerChoice === 3) {
        humanScore += 1;
        console.log('You Won! - Human:Rock | Computer:Scissors');
        console.log(`Human: ${humanScore}`);
    } 
    else if (humanChoice === 2 && computerChoice === 1) {
        humanScore += 1;
        console.log('You Won! - Human:Paper | Computer:Rock');
        console.log(`Human: ${humanScore}`);
    } else if (humanChoice === 2 && computerChoice === 3) {
        computerScore += 1;
        console.log('You Lost! - Human:Paper | Computer:Scissors');
        console.log(`Computer: ${computerScore}`);
    }
    else if (humanChoice === 3 && computerChoice === 1) {
        computerScore += 1;
        console.log('You Lost! - Human:Scissors | Computer:Rock');
        console.log(`Computer: ${computerScore}`);
    } else if (humanChoice === 3 && computerChoice === 2) {
        humanScore += 1;
        console.log('You Won! - Human:Scissors | Computer:Paper');
        console.log(`Human: ${humanScore}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame(humanSelection, computerSelection, humanScore, computerScore) {
    for (let i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection);
    }
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
}
console.log(playGame(humanSelection, computerSelection, humanScore, computerScore));