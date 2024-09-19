//Whoever wins earns one point per round
//A FUNCTION will keep track of the players score.


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

let computerScore = 0;
let humanScore = 0;

//Both VARIABLES are compared in a FUNCTION
function playRound(humChoice, comChoice) {
    humChoice = getHumanChoice();
    console.log(humChoice)
    comChoice = getComputerChoice();
    console.log(comChoice)
    switch (humChoice.toLowerCase()) {
        case "rock":
            if (comChoice == "rock") {
                console.log("It's a tie.");
            } else if (comChoice == "paper") {
                console.log("You lose...");
                computerScore += 1;
                console.log(computerScore + " comp")
                console.log(humanScore + " human")

            } else {
                console.log("You win!");
                humanScore += 1;
                console.log(computerScore + " comp")
                console.log(humanScore + " human")
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


