console.log("Hello World");

// computer should randomize their choice
function getComputerChoice() {
  let computerNumber = Math.random();
  let computerChoice;
  if (computerNumber > 0.666) {
    computerChoice = "paper";
  } else if (computerNumber < 0.333) {
    computerChoice = "rock";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

console.log(getComputerChoice());
// user should select their option
// getHumanChoice
// game should either
// user win
// computer win
// draw
// Keep track of score
// humanScore
// computerScore

// playRound option

// play 5 rounds option

// options with buttons
