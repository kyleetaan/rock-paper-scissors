function computerPlay() {
    const comp = ["rock", "paper", "scissors"];
    let attack = Math.floor(Math.random() * 3);
    // const compimg = document.querySelector('.comp-play');
    document.getElementById("comp-play").src = `img/${comp[attack]}.png`;

    

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


const imgs = document.querySelectorAll('.hands img');

imgs.forEach(img => img.addEventListener('click', play));


let playerpoint = 0;
let comppoint = 0;

function play(){
    let computer = computerPlay();
    let result = playRound(this.className, computer);

    console.log(result,this.className, computer);
    const scor = document.querySelector('.score-counter');

    if(result === "PLAYER"){
        playerpoint++;
        scor.textContent = `${playerpoint} - ${comppoint}`;
    }
    else if(result === "COMP"){
        comppoint++;
        scor.textContent = `${playerpoint} - ${comppoint}`;
    }
    else {
        scor.textContent = 'DRAW';
    }

    if(playerpoint === 5){
        showModal("Player");
    }
    else if (comppoint === 5) {
        showModal("Computer");
    }
}

const modal = document.getElementById('simpleModal');

const clsBtn = document.getElementById('closeBtn');

clsBtn.addEventListener('click', () => {
    window.location.reload();
})


function showModal(winner) {
    const win = `${winner} Wins!`;
    document.getElementById('winner').innerText = `${win}`;
    document.getElementById('winscor').innerText = `${playerpoint} - ${comppoint}`;
    modal.style.display = 'block';
}