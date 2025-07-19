// Initialize scores for computer and human players
let computerScore = 0;
let humanScore = 0;




// Function to get the human player's choice via buttons
function getHumanChoice() {
	let choices = document.querySelector('#choices');
	let i = 1;

	choices.addEventListener('click', (e) => {
		let humanWinTracker = false;
		let computerWinTracker = false;
		
		let computerSelection = getComputerChoice();
		let humanSelection = e.target.innerText;

		let playGameResult = playGame(computerSelection, humanSelection, humanWinTracker, computerWinTracker);
		// ----------------------------------------------------
		// console.log(`${playGameResult.result} ${playGameResult.humanWinTracker}, ${playGameResult.computerWinTracker}`);
		// ----------------------------------------------------
		let playRoundResult = playRound(i, humanSelection, computerSelection, playGameResult.result, playGameResult.humanWinTracker, playGameResult.computerWinTracker);

		i++;

		if(playRoundResult == false) {
			computerScore = 0;
			humanScore = 0;	
			i=1;
		}
	});

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
function playGame(humanChoice, computerChoice, humanWinTracker, computerWinTracker) {

	let resultObj = [];


	if (humanChoice === computerChoice) {
		// ----------------------------------------------------
		// console.log(`humanChoice: ${humanChoice} | computerChoice: ${computerChoice} | humanWinTracker: ${humanWinTracker} | computerWinTracker ${computerWinTracker}`);
		// ----------------------------------------------------
		return resultObj = {
			result: false,
			humanWinTracker: humanWinTracker,
			computerWinTracker: computerWinTracker
	}
		
	} else {
		switch(computerChoice) {
		case "rock":
			humanChoice == "scissors" 
			? (humanScore += 1, humanWinTracker = true) 
			: (computerScore +=1, computerWinTracker = true); 
			break;
		case "paper":
			humanChoice == "rock" 
			? (humanScore += 1, humanWinTracker = true) 
			: (computerScore +=1, computerWinTracker = true); 
			break;
		case "scissors":
			humanChoice == "paper" 
			? (humanScore += 1, humanWinTracker = true) 
			: (computerScore +=1, computerWinTracker = true); 
			break;
		}
		// console.log(`humanChoice: ${humanChoice} | computerChoice: ${computerChoice} | humanWinTracker: ${humanWinTracker} | computerWinTracker ${computerWinTracker}`);
		return resultObj = {
			result: true,
			humanWinTracker: humanWinTracker,
			computerWinTracker: computerWinTracker
		}
	}
	
}


function playRound(i, humanSelection, computerSelection, playGameResult, humanWinTracker, computerWinTracker) {
	console.log(`\n🎮 Round ${i} Results:`);
	console.log(`👤 Human chose: ${humanSelection}`);
	console.log(`🤖 Computer chose: ${computerSelection}`);

	// ----------------------------------------------------
	// console.log(`humanWinTracker: ${humanWinTracker}`);
	// console.log(`computerWinTracker: ${computerWinTracker}`);
	// ----------------------------------------------------

	if(playGameResult) {
		if (humanWinTracker) {
			console.log("🏆 You won this round!");
		} 

		if (computerWinTracker) {
			console.log("💻 Computer won this round!");
		}
	} else {
		console.log("🤝 It's a tie!");
	}
	
	console.log(`Scoreboard: Human ${humanScore} - ${computerScore} Computer`);

	if (humanScore === 5 || computerScore === 5) {
		console.log("\n\n-------------------------------------------------------");
		console.log("🎉 FINAL RESULT 🎉");
		humanScore > computerScore 
		? console.log("🏆 YOU WIN THE GAME!") 
		: console.log("💻 COMPUTER WINS THE GAME!");
		
		console.log("-------------------------------------------------------");
		return false;
	}

}


if(getHumanChoice()) {
	getHumanChoice();
}