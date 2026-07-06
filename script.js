function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1, 3));

// function getComputerChoice(random) {
//     return random;
// }

function getHumanChoice() {
    const humanChoice = prompt("Rock Paper Scissors: ");
    if (humanChoice.toLowerCase() === 'rock') {
        return 1;
    } else if (humanChoice.toLowerCase() === 'paper') {
        return 2;
    } else if (humanChoice.toLowerCase() === 'scissors') {
        return 3;
    }
}

function game(getComputerChoice) {

}

// console.log(getComputerChoice());

const humanScore = 0;
const computerScore = 0;

