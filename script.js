//Both VARIABLES are compared in a FUNCTION
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

let check = (n) => n == 1 ? "rock" : n == 2 ? "paper" : "scissors"


