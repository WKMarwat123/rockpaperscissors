const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        gameResultDiv.innerHTML = `Draw. ${playerChoice} cannot beat ${computerChoice}`;
        return 0;
    }
    if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            gameResultDiv.innerHTML = "You win. Rock beats Scissors";
            return 1;
        }
        if (computerChoice == "paper") {
            gameResultDiv.innerHTML = "You lose. Paper beats Rock"
            return -1;
        }
    }
    if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            gameResultDiv.innerHTML = "You lose. Scissors beat Paper"
            return -1;
        }
        if (computerChoice == "rock") {
            gameResultDiv.innerHTML = "You win. Paper beats Rock"
            return 1;
        }
    }
    if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            gameResultDiv.innerHTML = "You win. Scissors beats Paper"
            return 1;
        }
        if (computerChoice == "rock") {
            gameResultDiv.innerHTML = "You lose. Rock beats Scissors"
            return -1;
        }
    }
}

function game(playerSelection, computerSelection) {
    if (playerScore == 5 || computerScore == 5) {
        let divs = document.querySelectorAll('.results');
        divs = Array.from(divs);
        divs.map(div => {
            div.innerText = "";
        });

        playerScore = 0;
        computerScore = 0;
    }

    let result = playRound(playerSelection, computerSelection);
        if(result == 1) {
            playerScore++;
        }
        if(result == -1) {
            computerScore++;
        }

        roundResultDiv.innerHTML = `Player Score: ${playerScore}\nComputer Points: ${computerScore}`;

        if (playerScore == 5 || computerScore == 5) {
            endResultDiv.innerHTML = winner(playerScore, computerScore)
        }
}

function winner(player, computer) {
    if(player > computer) {
        return "Player Wins!";
    } else {
        return "Computer Wins!";
    }
}

let playerScore = 0;
let computerScore = 0;

let gameResultDiv = document.querySelector(".gameResult");
let roundResultDiv = document.querySelector(".gameDetails");
let endResultDiv = document.querySelector(".endResult");


let buttons = document.querySelectorAll("button");
buttons = Array.from(buttons);
    buttons.forEach(button => button.addEventListener("click", e => {
        game(e.target.className, getComputerChoice());
    }));