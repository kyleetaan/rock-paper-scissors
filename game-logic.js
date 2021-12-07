function computerPlay() {
    const comp = ["rock", "paper", "scissors"];
    let attack = Math.floor(Math.random() * 3);

    return comp[attack];
}


function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let comp = computerSelection.toLowerCase();
    if(player === comp){
        return "DRAW";
    }
    else if (player === "rock" && comp === "scissors"
            || player === "paper" && comp === "rock"
            || player === "scissors" && comp === "paper"){
                
                return "PLAYER";

    }
    else {
        return "COMP";
    }
}


function game() {
    let playerpoint = 0;
    let comppoint = 0;
    for(let i = 1; i <= 5; i++){
        let player = prompt("input rock,paper, or scissors", "rock");
        let computer = computerPlay();
        let result = playRound(player, computer);

        if(result === "PLAYER"){
            playerpoint++;
        }
        else if(result === "COMP"){
            comppoint++;
        }
        else {
            continue;
        }
    }

    if(playerpoint > comppoint){
        console.log("PLAYER WINS", playerpoint, comppoint)
    }
    else if (playerpoint < comppoint) {
        console.log("COMPUTER WINS", playerpoint, comppoint)
    }
    else {
        console.log("DRAW", playerpoint, comppoint)
    }
}

game();