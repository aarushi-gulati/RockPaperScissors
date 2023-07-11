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
result.classList.add("hehe")

const gif = document.createElement('img');
gif.classList.add("gif")

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
        getGIF(declaration)
    });    
});

async function getGIF(declaration){
    let search = "victory";
    if (declaration === "lose"){
        search = "sad";
    }
    if (declaration === "draw"){
        search = "boring";
    }
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=CPWvx8M4H9eqw1xBJP1B2Vwr6V42osQP&s=${search}`, {mode:'cors'});
    let required = await response.json();
    gif.setAttribute('src', (required.data.images.original.url))
    result.appendChild(gif)
}

const main = document.querySelector('body');
main.appendChild(result);
