function getComputerChoice() {
    
}

function getHumanChoice() {
    choice = prompt("Rock Paper Scissors: ");
    if (choice.toLowerCase() === "rock") {
        return 1;
    } else if (choice.toLowerCase() === 'paper') {
        return 2;
    } else if (choice.toLowerCase() === 'scissors') {
        return 3;
    }
}

console.log(getHumanChoice());