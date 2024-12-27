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

// plays
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// to add event listener to each for them or I can use the switch method let's see
const buttons = document.querySelectorAll("button");

// scores might need to convert to Number
const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    playRound(e);
  })
);

// playRound function

function playRound(e) {
  const event = e;
  const humanChoice = event.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(humanChoice);
  if (humanChoice === computerChoice) {
    // alert(`You both selected ${computerChoice}. DRAW!`);
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      // alert(
      //   `Human selected ${humanChoice}, Computer selected ${computerChoice}. HUMAN WON!`
      // );
      humanScore.textContent = Number(humanScore.textContent) + 1;
    } else {
      // alert(
      //   `Human selected ${humanChoice}, Computer selected ${computerChoice}. COMPUTER WON!`
      // );
      computerScore.textContent = Number(computerScore.textContent) + 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      // alert(
      //   `Human selected ${humanChoice}, Computer selected ${computerChoice}. HUMAN WON!`
      // );
      humanScore.textContent = Number(humanScore.textContent) + 1;
    } else {
      // alert(
      //   `Human selected ${humanChoice}, Computer selected ${computerChoice}. COMPUTER WON!`
      // );
      computerScore.textContent = Number(computerScore.textContent) + 1;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      // alert(
      //   `Human selected ${humanChoice}, Computer selected ${computerChoice}. HUMAN WON!`
      // );
      humanScore.textContent = Number(humanScore.textContent) + 1;
    } else {
      // alert(
      //   `Human selected ${humanChoice}, Computer selected ${computerChoice}. COMPUTER WON!`
      // );
      computerScore.textContent = Number(computerScore.textContent) + 1;
    }
  }
  if (Number(computerScore.textContent) >= 5) {
    alert(
      `Computer WON! Computer ${computerScore.textContent} x ${humanScore.textContent} Human`
    );
    humanScore.textContent = 0;
    computerScore.textContent = 0;
  } else if (Number(humanScore.textContent) >= 5) {
    alert(
      `Human WON! Computer ${computerScore.textContent} x ${humanScore.textContent} Human`
    );
    humanScore.textContent = 0;
    computerScore.textContent = 0;
  }
}
