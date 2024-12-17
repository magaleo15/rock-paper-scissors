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
  console.log(`Computer Played: ${computerChoice}`);
  return computerChoice;
}

// console.log(getComputerChoice());
// user should select their option
function getHumanChoice() {
  let humanChoice;
  humanChoice = prompt("Please select: Rock, Paper or Scissors");
  console.log(`Human Played: ${humanChoice.toLowerCase()}`);
  return humanChoice.toLowerCase();
}

// Keep track of score in console

let computerScore = 0;
let humanScore = 0;

// playRound function

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    alert(`You both selected ${computerChoice}. DRAW!`);
    humanScore += 1;
    computerScore += 1;
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      alert(
        `Human selected ${humanChoice}, Computer selected ${computerChoice}. HUMAN WON!`
      );
      humanScore += 1;
    } else {
      alert(
        `Human selected ${humanChoice}, Computer selected ${computerChoice}. COMPUTER WON!`
      );
      computerScore += 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      alert(
        `Human selected ${humanChoice}, Computer selected ${computerChoice}. HUMAN WON!`
      );
      humanScore += 1;
    } else {
      alert(
        `Human selected ${humanChoice}, Computer selected ${computerChoice}. COMPUTER WON!`
      );
      computerScore += 1;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      alert(
        `Human selected ${humanChoice}, Computer selected ${computerChoice}. HUMAN WON!`
      );
      humanScore += 1;
    } else {
      alert(
        `Human selected ${humanChoice}, Computer selected ${computerChoice}. COMPUTER WON!`
      );
      computerScore += 1;
    }
  }
}

function whoWon(computerScore, humanScore) {
  if (computerScore === humanScore) {
    console.log(
      `It was a DRAW: Computer ${computerScore} x ${humanScore} Human`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Computer WON! Computer ${computerScore} x ${humanScore} Human`
    );
  } else if (humanScore > computerScore) {
    console.log(`Human WON! Computer ${computerScore} x ${humanScore} Human`);
  }
}

function playGame() {
  let roundCount = 0;
  while (roundCount <= 5) {
    playRound();
    console.log(`Round ${roundCount} just ended`);
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    roundCount += 1;
  }
  whoWon(humanScore, computerScore);
}

playGame();
