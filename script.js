function getComputerChoice() {
    let n = Math.trunc(Math.random() * 3 + 1);
    return n == 1 ? "rock" : n == 2 ? "paper" : "scissors";
}

//Whoever wins earns one point per round
let computerScore = 0;
let humanScore = 0;

//Both Variables are compared
function playRound(HumanChoice) {
    humChoice = HumanChoice.toLowerCase();
    comChoice = getComputerChoice();
    console.log(`Player: ${humChoice}`);
    console.log(`Computer: ${comChoice}`);
    switch (humChoice) {
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

//Three buttons
const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');

btnRock.textContent = "ROCK";
btnPaper.textContent = "PAPER";
btnScissors.textContent = "SCISSORS";


function append(...btns) {
    btns.forEach(e => document.body.appendChild(e));
};

function playGame(...btns) {
    btns.forEach((b) => b.addEventListener("click", () => playRound(b.textContent)));
    console.log(`The winner of the game is the ${humanScore > computerScore ? "PLAYER" : "COMPUTER"}`)
}

append(btnRock, btnPaper, btnScissors);
playGame(btnRock, btnPaper, btnScissors);
