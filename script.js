const buttons = document.querySelectorAll("button");
const roundResultText = document.querySelector("#roundResult");
const humanScoreText = document.querySelector("#humanScore");
const computerScoreText = document.querySelector("#computerScore");
const finalResultText = document.querySelector("#finalResult");
let humanScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    playRound(event.target.id, getComputerChoice());
  });
});

function playRound(humanChoice, computerChoice) {
  if (finalResultText.textContent !== "") {
    finalResultText.textContent = "";
  }
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      roundResultText.textContent = "It's a draw!";
    } else if (computerChoice === "paper") {
      roundResultText.textContent = "You lose! Paper beats rock.";
      computerScore++;
    } else {
      roundResultText.textContent = "You win! Rock beats scissors.";
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      roundResultText.textContent = "You win! Paper beats rock.";
      humanScore++;
    } else if (computerChoice === "paper") {
      roundResultText.textContent = "It's a draw!";
    } else {
      roundResultText.textContent = "You lose! Scissors beats paper.";
      computerScore++;
    }
  } else {
    if (computerChoice === "rock") {
      roundResultText.textContent = "You lose! Rock beats scissors.";
      computerScore++;
    } else if (computerChoice === "paper") {
      roundResultText.textContent = "You win! Scissors beats paper.";
      humanScore++;
    } else {
      roundResultText.textContent = "It's a draw!";
    }
  }
  humanScoreText.textContent = `human: ${humanScore}`;
  computerScoreText.textContent = `computer: ${computerScore}`;
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
    finalResultText.textContent = "You're the winner!";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    finalResultText.textContent = "The computer is the winner!";
    humanScore = 0;
    computerScore = 0;
  }
}