const buttons = document.querySelectorAll("button");
let humanScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    playRound(event.target.id, getComputerChoice());
  });
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("It's a draw!");
    } else if (computerChoice === "paper") {
      console.log("You lose! Paper beats rock.");
      computerScore++;
    } else {
      console.log("You win! Rock beats scissors.");
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats rock.");
      humanScore++;
    } else if (computerChoice === "paper") {
      console.log("It's a draw!");
    } else {
      console.log("You lose! Scissors beats paper.");
      computerScore++;
    }
  } else {
    if (computerChoice === "rock") {
      console.log("You lose! Rock beats scissors.");
      computerScore++;
    } else if (computerChoice === "paper") {
      console.log("You win! Scissors beats paper.");
      humanScore++;
    } else {
      console.log("It's a draw.");
    }
  }
  console.log(`human: ${humanScore}`);
  console.log(`computer: ${computerScore}`);
  checkWinner();

}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function checkWinner() {
  if (humanScore === 5) {
    console.log("You're the winner!");
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    console.log("The computer is the winner!");
    humanScore = 0;
    computerScore = 0;
  }
}