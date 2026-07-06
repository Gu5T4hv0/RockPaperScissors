function getComputerChoice() {
    compChoice = Math.floor(Math.random() * (1 - 3 + 1)) + 1;
    return compChoice;
}

function getHumanChoice() {
    humanChoice = prompt("Rock Paper Scissors: ");
    if (humanChoice.toLowerCase() === 'rock') {
        return 1;
    } else if (humanChoice.toLowerCase() === 'paper') {
        return 2;
    } else if (humanChoice.toLowerCase() === 'scissors') {
        return 3;
    }
}

console.log(getComputerChoice());