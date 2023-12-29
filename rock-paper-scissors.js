let playerSelection;
let playerScore = 0;
let computerScore = 0;
let roundNbr = 0;

function getComputerChoice() {
    const dice = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    return choices[dice];
}

const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const roundWinner = playRound(button.id);
        game(roundWinner);
    });
});


function playRound(playerSelection) {
    computerSelection = getComputerChoice();

    switch (playerSelection) {
        case computerSelection:
            results.textContent = `Computer played ${computerSelection} too, it's a draw!`;
            break;
        case "rock":
            if (computerSelection === "paper") {
                results.textContent = "Computer played paper, you loose this round!";
                return "computer";
            } else {
                results.textContent = "Computer played scissors, you won this round!";
                return "player";
            }
        case "paper":
            if (computerSelection === "rock") {
                results.textContent = "Computer played rock, you won this round!";
                return "player";
            } else {
                results.textContent = "Computer played scissors, you loose this round!";
                return "computer";
            }
        case "scissors":
            if (computerSelection === "rock") {
                results.textContent = "Computer played rock, you loose this round!";
                return "computer";
            } else {
                results.textContent = "Computer played paper, you won this round!";
                return "player";
            }
    }
}

function game(roundWinner) {
    if (roundWinner === "player") {
        ++playerScore;
    } else if (roundWinner === "computer") {
        ++computerScore;
    }

    ++roundNbr;


    if (playerScore === 5) {
        gameStats.textContent = `You won the game in ${roundNbr} rounds!`;
        // Figure why it doesn't work
        // buttons.forEach((button) => {
        //     button.removeEventListener('click', button);
        //     console.log(button);
        // });
    } else if (computerScore === 5) {
        gameStats.textContent = `The computer won the game in ${roundNbr} rounds!`;
        // buttons.forEach((button) => {
        //     button.removeEventListener('click', button);
        //     console.log(button);
        // });
    } else {
        gameStats.textContent = `Round ${roundNbr}; player : ${playerScore}; computer : ${computerScore}`;
    }
}