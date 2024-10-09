function getComputerChoice() {
    let n = Math.trunc(Math.random() * 3 + 1);
    return n == 1 ? "rock" : n == 2 ? "paper" : "scissors";
}

let computerScore = 0;
let humanScore = 0;

function playRound(HumanChoice) {
    const div = document.createElement('div');
    const choices = document.createElement('div');
    const score = document.createElement('div');
    const winner = document.createElement('div');

    div.appendChild(choices);
    div.appendChild(score);
    document.body.appendChild(div);

    humChoice = HumanChoice.toLowerCase();
    comChoice = getComputerChoice();

    choices.textContent = `Player choice: ${humChoice} / Computer choice: ${comChoice}`;
    
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
    score.textContent = `SCORE: Player= ${humanScore} / Computer= ${computerScore}`;
    if (!condition()) winner.textContent = `The game is over. The winner is ${humanScore > computerScore ? "PLAYER" : "COMPUTER"}`;
    document.body.appendChild(winner)
}
//Create html elements
const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');

btnRock.textContent = "ROCK";
btnPaper.textContent = "PAPER";
btnScissors.textContent = "SCISSORS";

append(btnRock, btnPaper, btnScissors);

function append(...btns) {
    btns.forEach((e) => document.body.appendChild(e));
};

function playGame(...btns) {
    btns.forEach((b) => b.addEventListener("click", (e) => {
        if (condition()) {
            playRound(b.textContent);
        } else {
            e.stopPropagation();
        }
    })
    );
}

const condition = () => humanScore < 5 && computerScore < 5;

playGame(btnRock, btnPaper, btnScissors);