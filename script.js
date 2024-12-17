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
  console.log(computerChoice);
  return computerChoice;
}

// console.log(getComputerChoice());
// user should select their option
function getHumanChoice() {
  let humanChoice;
  humanChoice = prompt("Please select: Rock, Paper or Scissors");
  console.log(humanChoice.toLowerCase);
  return humanChoice.toLowerCase();
}

// Keep track of score in console
// humanScore
// computerScore

// playRound function

function playRound() {
  let humanChoice = getHumanChoice();

  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    alert(`You both selected ${computerChoice}. DRAW!`);
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      alert(
        `Human selected ${humanChoice}, Computer selected ${computerChoice}. HUMAN WON!`
      );
    } else {
      alert(
        `Human selected ${humanChoice}, Computer selected ${computerChoice}. COMPUTER WON!`
      );
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      alert(
        `Human selected ${humanChoice}, Computer selected ${computerChoice}. HUMAN WON!`
      );
    } else {
      alert(
        `Human selected ${humanChoice}, Computer selected ${computerChoice}. COMPUTER WON!`
      );
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      alert(
        `Human selected ${humanChoice}, Computer selected ${computerChoice}. HUMAN WON!`
      );
    } else {
      alert(
        `Human selected ${humanChoice}, Computer selected ${computerChoice}. COMPUTER WON!`
      );
    }
  }
}
playRound();

// play 5 rounds option

// options with buttons
