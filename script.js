const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function getPlayerChoice() {
    let choice = prompt("Enter your choice: ").toLowerCase();
    if (choices.includes(choice)) {
        return choice;
    } else {
        return getPlayerChoice();
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log(`Draw. ${playerChoice} cannot beat ${computerChoice}`);
        return 0;
    }
    if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You win. Rock beats Scissors");
            return 1;
        }
        if (computerChoice == "paper") {
            console.log("You lose. Paper beats Rock")
            return -1;
        }
    }
    if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose. Scissors beat Paper")
            return -1;
        }
        if (computerChoice == "rock") {
            console.log("You win. Paper beats Rock")
            return 1;
        }
    }
    if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("You win. Scissors beats Paper")
            return 1;
        }
        if (computerChoice == "rock") {
            console.log("You lose. Rock beats Scissors")
            return -1;
        }
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for(let i=0; i<5 ; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        if(result == 1) {
            playerPoints++;
        } else if(result == -1) {
            computerPoints++;
        } else {
            continue;
        }
    }
    console.log(`Player Points: ${playerPoints}`);
    console.log(`Computer Points: ${computerPoints}`);
    winner(playerPoints, computerPoints)
}

function winner(player, computer) {
    if(player > computer) {
        console.log("You Win!")
    } else if(player < computer) {
        console.log("Computer Wins!")
    } else {
        console.log("Draw.")
    }
}

game()