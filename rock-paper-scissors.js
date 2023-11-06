let playerSelection;
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const dice = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    return choices[dice];
}

function getPlayerChoice() {
    const selection = prompt("Whats your choice?");
    return selection;
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case computerSelection.toLowerCase():
            console.log("It's a draw!");
            break;
        case "rock":
            if (computerSelection.toLowerCase() === "paper") {
                console.log("You loose this round!");
                return "computer";
            } else if (computerSelection.toLowerCase() === "scissors") {
                console.log("You won this round!");
                return "player";
            } else {
                console.error("There is an error");
            }
            break;
        case "paper":
            if (computerSelection.toLowerCase() === "rock") {
                console.log("You won this round!");
                return "player";
            } else if (computerSelection.toLowerCase() === "scissors") {
                console.log("You loose this round!");
                return "computer";
            } else {
                console.error("There is an error");
            }
            break;
        case "scissors":
            if (computerSelection.toLowerCase() === "rock") {
                console.log("You loose this round!");
                return "computer";
            } else if (computerSelection.toLowerCase() === "paper") {
                console.log("You won this round!");
                return "player";
            } else {
                console.error("There is an error");
            }
            break;
        default:
            console.error("There is an error");
    }
}


playerSelection = getPlayerChoice();
console.log(playerSelection);

console.log(playRound(playerSelection, getComputerChoice()));