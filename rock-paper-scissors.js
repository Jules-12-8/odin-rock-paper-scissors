let userSelection = "scissors";
let computerSelection = "rock";
let userScore = 0;
let computerScore = 0;

//In the getRoundResult function the two cells array permit to reversely test the conditionals with a recursive call and make the function shorter.
function getRoundResult(user, computer) {
    //!Ajouter toLowerCase
    let result = [];
    if (user === "rock" && computer === "paper") {
        result = [0, 1];
    } else if (user === "rock" && computer === "scissors") {
        result = [1, 0];
    } else if (user === "paper" && computer === "scissors") {
        result = [0, 1];
    } else if (user === computer) {
        result = [0, 0];
    } else {
        result = getRoundResult(computer, user);
        result = result.reverse();
    }
    return result
}

let roundResult = getRoundResult(userSelection, computerSelection);

function setRoundScore(roundResult) {
    if (roundResult[0] === 0 && roundResult[1] === 0) {
        console.log(`It's a draw! ${userScore}`);
    } else if (roundResult[0] === 1) {
        userScore = userScore + 1;
        console.log(`You won this round! ${userScore}`);
    } else if (roundResult[1] === 1) {
        computerScore = computerScore + 1;
        console.log(`You loose this round ${computerScore}`);
    }
}



console.log(roundResult);
console.log(setRoundScore(roundResult));