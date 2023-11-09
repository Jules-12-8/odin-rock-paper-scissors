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
    return selection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case computerSelection:
            console.log(`Computer played ${computerSelection}, it's a draw!`);
            break;
        case "rock":
            if (computerSelection === "paper") {
                console.log("Computer played paper, you loose this round!");
                return "computer";
            } else if (computerSelection === "scissors") {
                console.log("Computer played scissors, you won this round!");
                return "player";
            } else {
                console.error("There is an error");
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                console.log("Computer played rock, you won this round!");
                return "player";
            } else if (computerSelection === "scissors") {
                console.log("Computer played scissors, you loose this round!");
                return "computer";
            } else {
                console.error("There is an error");
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                console.log("Computer played rock, you loose this round!");
                return "computer";
            } else if (computerSelection === "paper") {
                console.log("Computer played paper, you won this round!");
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