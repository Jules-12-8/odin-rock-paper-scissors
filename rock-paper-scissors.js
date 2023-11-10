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
            console.log(`Computer played ${computerSelection} too, it's a draw!`);
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundNbr = 0;
    while (roundNbr < 5) {
        let roundResult = playRound(getPlayerChoice(), getComputerChoice());
        if (roundResult === "player") {
            playerScore++;
        } else if ((roundResult === "computer")) {
            computerScore++;
        }
        console.log(`Player have ${playerScore} points and Computer have ${computerScore} points.`);
        roundNbr++;
    }
    if (playerScore === computerScore) {
        console.log(`${playerScore} to ${computerScore}, equality !`);
    } else if (playerScore > computerScore) {
        console.log("You won the game !!!");
    } else {
        console.log("Computer won the game");
    }
}

game();