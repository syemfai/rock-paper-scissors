function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}

function play(playerSelection, computerSelection) {
    
}

console.log(computerPlay());