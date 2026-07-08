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

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice, humanScore, computerScore) {

    if (humanChoice === 1 && computerChoice === 1) {
        console.log('Tie! - Human:Rock | Computer:Rock');
    } else if (humanChoice === 2 && computerChoice === 2) {
        console.log('Tie! - Human:Paper | Computer:Paper');
    } else if (humanChoice === 3 && computerChoice === 3) {
        console.log('Tie! - Human:Scissors | Computer:Scissors');
    }
    else if (humanChoice === 1 && computerChoice === 2) {
        console.log('You Lost! - Human:Rock | Computer:Paper');
        computerScore += 1;
        console.log(`Computer: ${computerScore}`);
    } else if (humanChoice === 1 && computerChoice === 3) {
        console.log('You Won! - Human:Rock | Computer:Scissors');
        humanScore += 1;
        console.log(`Human: ${humanScore}`);
    } 
    else if (humanChoice === 2 && computerChoice === 1) {
        console.log('You Won! - Human:Paper | Computer:Rock');
        humanScore += 1;
        console.log(`Human: ${humanScore}`);
    } else if (humanChoice === 2 && computerChoice === 3) {
        console.log('You Lost! - Human:Paper | Computer:Scissors');
        computerScore += 1;
        console.log(`Computer: ${computerScore}`);
    }
    else if (humanChoice === 3 && computerChoice === 1) {
        console.log('You Lost! - Human:Scissors | Computer:Rock');
        computerScore += 1;
        console.log(`Computer: ${computerScore}`);
    } else if (humanChoice === 3 && computerChoice === 2) {
        console.log('You Won! - Human:Scissors | Computer:Paper');
        humanScore += 1;
        console.log(`Human: ${humanScore}`);
    }
}

function playGame(humanScore, computerScore) {
    for (let i = 0; i < 5; i++) {
        playRound(humanChoice, computerChoice);
    }
    console.log(`Human: ${humanScore} Computer: ${computerScore}`)
}
playGame(humanScore, computerScore)