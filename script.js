function getComputerChoice() {
    let n = Math.trunc(Math.random() * 3 + 1);
    return n == 1 ? "rock" : n == 2 ? "paper" : "scissors";
}

function getHumanChoice() {
    do {
        str = prompt("Let's play! Choose... Rock, Paper or Scissors?", ).toLowerCase();
    } while (str != "rock" && str != "paper" && str != "scissors");
    return str
}

//Whoever wins earns one point per round
let computerScore = 0;
let humanScore = 0;

//Both Variables are compared
function playRound() {
    humChoice = getHumanChoice();
    comChoice = getComputerChoice();
    console.log(`Player: ${humChoice}`);
    console.log(`Computer: ${comChoice}`);
    switch (humChoice.toLowerCase()) {
        case "rock":
            if (comChoice == "rock") {
                alert("It's a tie.");
            } else if (comChoice == "paper") {
                alert("You lose...");
                computerScore += 1;
            } else {
                alert("You win!");
                humanScore += 1;
            }
            break;
        case "paper":
            if (comChoice == "paper") {
                alert("It's a tie.");
            } else if (comChoice == "scissors") {
                alert("You lose...");
                computerScore += 1;
            } else {
                alert("You win!");
                humanScore += 1;
            }
            break;
        case "scissors":
            if (comChoice == "scissors") {
                alert("It's a tie.");
            } else if (comChoice == "rock") {
                alert("You lose...");
                computerScore += 1;
            } else {
                alert("You win!");
                humanScore += 1;
            }
    }
    alert(`Computer ${computerScore} / Human ${humanScore}`)
}
//Start and End the game
function playGame() {
    playRound();
    alert(`The winner of the game is the ${humanScore > computerScore ? "PLAYER" : "COMPUTER"}`)
}
//Three buttons
const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');

function append(...btns) {btns.forEach(e => document.body.appendChild(e))};

append(btnRock, btnPaper, btnScissors);
