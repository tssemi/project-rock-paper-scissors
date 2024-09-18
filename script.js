//A FUNCTION gives VARIABLE a random string between rock, paper and scissors
//The player enters another string into a VARIABLE using PROMPT (rock, paper ora scissors)
//Both VARIABLES are compared in a FUNCTION
//Whoever wins earns one point per round
//A FUNCTION will keep track of the players score.

function getComputerChoice() {
    let n = Math.trunc(Math.random() * 3 + 1);
    return n == 1 ? "rock" : n == 2 ? "paper" : "scissors"
}

