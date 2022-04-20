let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "The game is a tie"
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            globalThis.computerScore++ ;
            return "You Lose! Paper beats Rock";
        }
        else {
            globalThis.playerScore++ ;
            return "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            globalThis.computerScore++ ;
            return "You Lose! Scissors beats Paper";
        }
        else {
            globalThis.playerScore++ ;
            return "You Win! Paper beats Rock";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            globalThis.playerScore++ ;
            return "You Win! Scissors beats Paper";
        }
        else {
            globalThis.computerScore++ ;
            return "You Lose! Rock beats Scissors";
        }
    }
}

function game() {
    const playerSelection = "rock";
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(globalThis.computerScore);
    }
}


game()