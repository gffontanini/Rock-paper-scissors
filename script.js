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

function getHumanChoice() {}

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

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

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

	while (humanScore < 5 && computerScore < 5) {
		let result = playRound(getHumanChoice());
		humanScore += result.humanScore;
		computerScore += result.computerScore;
		displayScore(humanScore, computerScore);
	}

	if (humanScore > computerScore) {
		displayResults("You've won the game!");
	} else if (computerScore > humanScore) {
		displayResults("You've lost! better luck next time!");
	} else {
		displayResults("It's a tie!");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const buttonsDiv = document.getElementById("buttons");

	const rockButton = document.createElement("button");
	rockButton.textContent = "Rock";
	rockButton.addEventListener("click", () => {
		playRound("Rock");
		displayScore(result.humanScore, result.computerScore);
	});
	buttonsDiv.appendChild(rockButton);

	const paperButton = document.createElement("button");
	paperButton.textContent = "Paper";
	paperButton.addEventListener("click", () => {
		playRound("Paper");
		displayScore(result.humanScore, result.computerScore);
	});
	buttonsDiv.appendChild(paperButton);

	const scissorsButton = document.createElement("button");
	scissorsButton.textContent = "Scissors";
	scissorsButton.addEventListener("click", () => {
		playRound("Scissors");
		displayScore(result.humanScore, result.computerScore);
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

playGame();
