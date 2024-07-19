function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	if (choice == 0) {
		return "Rock";
	} else if (choice == 1) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

//function getHumanChoice() {
//	let choice = prompt("Rock, Paper, Scissors?");
//	if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
//		return choice;
//	} else {
//		console.log("Invalid answer");
//		return getHumanChoice();
//	}
//}

function playRound(humanChoice) {
	let computerChoice = getComputerChoice();

	if (humanChoice === computerChoice) {
		displayResults("It's a tie!");
		return { humanScore: 0, computerScore: 0 };
	} else if (
		(humanChoice === "Rock" && computerChoice === "Scissors") ||
		(humanChoice === "Paper" && computerChoice === "Rock") ||
		(humanChoice === "Scissors" && computerChoice === "Paper")
	) {
		displayResults(`You Win! ${humanChoice} beats ${computerChoice}`);
		return { humanScore: 1, computerScore: 0 };
	} else {
		displayResults(`You Lose! ${computerChoice} beats ${humanChoice}`);
		return { humanScore: 0, computerScore: 1 };
	}
}

let humanScore = 0;
let computerScore = 0;
let gameEnded = false;

//for (let i = 0; i < 5; i++) {
//	let result = playRound();
//	humanScore += result.humanScore;
//	computerScore += result.computerScore;
//
//		console.log(`Human Score: ${humanScore}`);
//		console.log(`Computer Score: ${computerScore}`);
//
//		if (humanScore >= 5 || computerScore >= 5) {
//			break;
//		}
//	}

document.addEventListener("DOMContentLoaded", () => {
	const buttonsDiv = document.getElementById("buttons");

	const rockButton = document.createElement("button");
	rockButton.textContent = "Rock";
	rockButton.addEventListener("click", () => {
		if (!gameEnded) {
			let result = playRound("Rock");
			humanScore += result.humanScore;
			computerScore += result.computerScore;
			displayScore(humanScore, computerScore);
			checkGameEnd();
		}
	});
	buttonsDiv.appendChild(rockButton);

	const paperButton = document.createElement("button");
	paperButton.textContent = "Paper";
	paperButton.addEventListener("click", () => {
		if (!gameEnded) {
			let result = playRound("Paper");
			humanScore += result.humanScore;
			computerScore += result.computerScore;
			displayScore(humanScore, computerScore);
			checkGameEnd();
		}
	});
	buttonsDiv.appendChild(paperButton);

	const scissorsButton = document.createElement("button");
	scissorsButton.textContent = "Scissors";
	scissorsButton.addEventListener("click", () => {
		if (!gameEnded) {
			let result = playRound("Scissors");
			humanScore += result.humanScore;
			computerScore += result.computerScore;
			displayScore(humanScore, computerScore);
		}
	});
	buttonsDiv.appendChild(scissorsButton);
});

function displayResults(message) {
	const resultDiv = document.getElementById("result");
	resultDiv.textContent = message;
}

function displayScore(humanScore, computerScore) {
	const scoreDiv = document.getElementById("score");
	scoreDiv.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;
}

function checkGameEnd() {
	if (humanScore >= 5 || computerScore >= 5) {
		gameEnded = true;
		if (humanScore > computerScore) {
			displayResults("You've won the game!");
		} else if (computerScore > humanScore) {
			displayResults("You've lost! better luck next time!");
		} else {
			displayResults("It's a tie!");
		}
	}
}

playGame();
