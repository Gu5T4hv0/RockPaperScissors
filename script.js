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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(1, 3);

function playRound(humanChoice, computerChoice) {

    if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log('Tie! - Human:Rock | Computer:Rock');
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log('Tie! - Human:Paper | Computer:Paper');
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log('Tie! - Human:Scissors | Computer:Scissors');
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        console.log('You Lost! - Human:Rock | Computer:Paper');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        console.log('You Won! - Human:Rock | Computer:Scissors');
    } 
    else if (humanChoice === 'paper' && computerChoice === 'paper') {
        humanScore += 1;
        console.log('You Won! - Human:Paper | Computer:Rock');
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        console.log('You Lost! - Human:Paper | Computer:Scissors');
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        console.log('You Lost! - Human:Scissors | Computer:Rock');
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        console.log('You Won! - Human:Scissors | Computer:Paper');
    }
}
function playGame(humanChoose, computerChoose) {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(humanChoose, computerChoose);
    }
    return `Human: ${humanScore} Computer: ${computerScore}`;
}
const result = playGame(humanSelection, computerSelection);
console.log(result);

// console.log(playGame(humanSelection, computerSelection));