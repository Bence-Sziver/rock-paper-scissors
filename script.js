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

function getHumanChoice() {
  let userChoice = prompt("Choose rock, paper or scissors!");
  return userChoice;
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock") {
      if (computerChoice === "rock") {
        console.log("It's a draw!");
      } else if (computerChoice === "paper") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
      } else {
        console.log("You win! Rock beats scissors.");
        humanScore++;
      }
    } else if (humanChoice.toLowerCase() === "paper") {
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
  }

  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`human: ${humanScore}`);
    console.log(`computer: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You're the winner!");
  } else if (humanScore < computerScore) {
    console.log("The computer is the winner!");
  } else {
    console.log("The result is a draw!");
  }
}

playGame();