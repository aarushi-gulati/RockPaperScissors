function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    let x = Math.floor(Math.random() * 3);
    return options[x];
}

function playRound(playerChoice, computerChoice){
    if (playerChoice.toLowerCase() === 'paper' && computerChoice === `rock`){
        return ("You win! Paper beats Rock");
    }

    else if (playerChoice.toLowerCase() === 'rock' && computerChoice === `paper`){
        return ("You lose! Paper beats Rock");
    }

    else if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'scissors'){
        return ("You lose! Scissors beats Paper");
    }

    else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock'){
        return ("You lose! Rock beats Scissors");
    }

    else if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors'){
        return ("You win! Rock beats Scissors");
    }

    else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper'){
        return ("You win! Scissors beats Paper");
    }

    else {
        return (`It's a draw!`);
    }
}

let playerSelection = "rock"; 

const buttons = document.querySelectorAll('button');

const result = document.createElement('div');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        result.textContent = playRound(playerSelection, getComputerChoice())
    });    
});


result.textContent = playRound(playerSelection, getComputerChoice());

const main = document.querySelector('body');
main.appendChild(result);

console.log(result);