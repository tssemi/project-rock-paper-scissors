//A FUNCTION gives VARIABLE a random string between rock, paper and scissors
function getComputerChoice() {
    let n = Math.trunc(Math.random() * 3 + 1);
    return check(n)
}

//The player enters another string into a VARIABLE using PROMPT (rock, paper ora scissors)
function getHumanChoice() {
    let n = prompt("Let's play! Choose one... Rock(1), Paper(2) or Scissors(3 or other)?", );
    return check(n)
}

let check = (n) => n == 1 ? "rock" : n == 2 ? "paper" : "scissors";

//Whoever wins earns one point per round
let computerScore = 0;
let humanScore = 0;

//Both VARIABLES are compared in a FUNCTION
function playRound(humChoice, comChoice) {
    humChoice = getHumanChoice();
    console.log(`Player: ${humChoice}`)
    comChoice = getComputerChoice();
    console.log(`Computer: ${comChoice}`)
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

            break;
        case "scissors":

            break;
    
        default:
            break;
    }
}

function playGame() {
    do {
        playRound()
        console.log(`Computer ${computerScore} / Human ${humanScore}`)
    } while (humanScore < 4 && computerScore < 4);
    console.log(`The winner is the ${humanScore > computerScore ? "PLAYER" : "COMPUTER"}`)

}
playGame()
