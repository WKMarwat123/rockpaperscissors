const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]

    let index = Math.floor(Math.random() * choices.length)
    return choices[index]
}

function getPlayerSelection() {
    let choice = prompt("Enter your choice: ").toLowerCase()
    if (choices.includes(choice)) {
        return choice
    } else {
        return getPlayerSelection()
    }
}

