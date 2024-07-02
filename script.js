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

function getHumanChoice() {
	let choice = prompt("Rock, Paper, Scissors?");
	if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
		return choice;
	} else {
		console.log("Invalid answer");
		return getHumanChoice();
	}
}

function playRound() {
	let humanChoice = getHumanChoice();
	humanChoice =
		humanChoice.charAt(0).toUpperCase() +
		humanChoice.slice(1).toLowerCase();

	let computerChoice = getComputerChoice();

	if (humanChoice === computerChoice) {
		console.log("It's a tie!");
		return { humanScore: 0, computerScore: 0 };
	} else if (
		(humanChoice === "Rock" && computerChoice === "Scissors") ||
		(humanChoice === "Paper" && computerChoice === "Rock") ||
		(humanChoice === "Scissors" && computerChoice === "Paper")
	) {
		console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
		return { humanScore: 1, computerScore: 0 };
	} else {
		console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
		return { humanScore: 0, computerScore: 1 };
	}
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		let result = playRound();
		humanScore += result.humanScore;
		computerScore += result.computerScore;

		console.log(`Human Score: ${humanScore}`);
		console.log(`Computer Score: ${computerScore}`);

		if (humanScore >= 5 || computerScore >= 5) {
			break;
		}
	}

	if (humanScore > computerScore) {
		console.log("You've won the game!");
	} else if (computerScore > humanScore) {
		console.log("You've lost! better luck next time!");
	} else {
		console.log("It's a tie!");
	}
}

playGame();
