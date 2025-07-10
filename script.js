// Initialize scores for computer and human players
let computerScore = 0;
let humanScore = 0;
let humanWinTracker = false;
let computerWinTracker = false;

// Function to get the human player's choice via prompt
function getHumanChoice() {
	let choice = prompt("What is your choice?");
	return choice;
}

// Function to randomly select the computer's choice
function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3) + 1;

	switch(randomNumber) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
	}
}


// Function to play a single round of the game
function playGame(humanChoice, computerChoice) {

	humanWinTracker = false;
	computerWinTracker = false;

	if (humanChoice === computerChoice) {
		return false;
	} else {
		switch(humanChoice) {
		case "rock":
			computerChoice == "scissors" 
			? (humanScore += 1, humanWinTracker = true) 
			: (computerScore +=1, computerWinTracker = true); 
			break;
		case "paper":
			computerChoice == "rock" 
			? (humanScore += 1, humanWinTracker = true) 
			: (computerScore +=1, computerWinTracker = true); 
			break;
		case "scissors":
			computerChoice == "paper" 
			? (humanScore += 1, humanWinTracker = true) 
			: (computerScore +=1, computerWinTracker = true); 
			break;
		}
		return true;
	}
	
}


function playRound() {
	for(i=1; i<=5; i++) {
		let humanSelection = getHumanChoice();
		let computerSelection = getComputerChoice();
		let playGameResult = playGame(humanSelection, computerSelection);

		console.log(`\n🎮 Round ${i} Results:`);
		console.log(`👤 Human chose: ${humanSelection}`);
		console.log(`🤖 Computer chose: ${computerSelection}`);
		if(playGameResult === false) {
			console.log("🤝 It's a tie!");
		} else {
			if (humanWinTracker) {
				console.log("🏆 You won this round!");
			} else {
				console.log("💻 Computer won this round!");
			}
		}
	}

	console.log("\n\n-------------------------------------------------------");
	console.log("🎉 FINAL RESULT 🎉");
	console.log(`Scoreboard: Human ${humanScore} - ${computerScore} Computer`);

	humanScore > computerScore 
	? console.log("🏆 YOU WIN THE GAME!") 
	: console.log("💻 COMPUTER WINS THE GAME!");
	
	console.log("-------------------------------------------------------");
}


playRound();