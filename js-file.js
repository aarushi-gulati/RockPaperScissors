function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    let x = Math.floor(Math.random() * 3);
    return options[x];
}

function playRound(playerChoice, computerChoice){
    if (playerChoice.toLowerCase() === 'paper' && computerChoice === `rock`){
        return ("won");
    }

    else if (playerChoice.toLowerCase() === 'rock' && computerChoice === `paper`){
        return ("lose");
    }

    else if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'scissors'){
        return ("lose");
    }

    else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock'){
        return ("lose");
    }

    else if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors'){
        return ("won");
    }

    else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper'){
        return ("won");
    }

    else {
        return (`draw`);
    }
}

const buttons = document.querySelectorAll('img');

const result = document.createElement('div');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        let declaration = playRound(playerSelection, computerSelection);
        result.setAttribute("id", declaration)
        if (declaration === "won"){
            result.textContent = `You ${declaration}! ${playerSelection} beats ${computerSelection}`
        }

        else if (declaration === "lose"){
            result.textContent = `You ${declaration}! ${computerSelection} beats ${playerSelection}`
        }

        else {
            result.textContent = `It's a draw!`
        }
    });    
});

const main = document.querySelector('body');
main.appendChild(result);

console.log(result);