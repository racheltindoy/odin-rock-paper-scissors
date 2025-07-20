// Initialize scores for computer and human players
let computerScore = 0;
let humanScore = 0;
let humanChoiceLabel = document.querySelector("#human");
let computerChoiceLabel = document.querySelector("#computer");
let roundLabel = document.querySelector('#round_label');
let humanScoreLabel = document.querySelector('#human_score');
let computerScoreLabel = document.querySelector('#computer_score');

humanScoreLabel.textContent = humanScore;
computerScoreLabel.textContent = computerScore;

// Function to get the human player's choice via buttons
function getHumanChoice() {
	let choices = document.querySelector('#choices');
	let i = 1;
	
	console.log(roundLabel);

	choices.addEventListener('click', (e) => {
		
		let humanWinTracker = false;
		let computerWinTracker = false;

		let choiceBtn = e.target.closest('button');
		if (!choiceBtn) {return; }
		if (choiceBtn) {roundLabel.textContent = 'Round ' + i;}
		let humanSelection = choiceBtn.id;
		let computerSelection = getComputerChoice();

		updateChoicesImage(humanSelection, computerSelection);
		

		humanChoiceLabel.textContent = humanSelection;
		computerChoiceLabel.textContent = computerSelection;
		
		
		
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

		humanScoreLabel.textContent = humanScore;
		computerScoreLabel.textContent = computerScore;
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

	const result_description = document.querySelector('#result_description');

	// ----------------------------------------------------
	// console.log(`humanWinTracker: ${humanWinTracker}`);
	// console.log(`computerWinTracker: ${computerWinTracker}`);
	// ----------------------------------------------------

	if(playGameResult) {
		if (humanWinTracker) {
			result_description.textContent = `🏆 You won this round!`;
			console.log("🏆 You won this round!");
		} 

		if (computerWinTracker) {
			result_description.textContent = `💻 Computer won this round!`;
			console.log("💻 Computer won this round!");
		}
	} else {
		result_description.textContent = `🤝 It's a tie!`;
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

// UI
function updateChoicesImage(humanChoice, computerChoice) {
	// console.log("Computer choice: " + computerChoice);
	let humanChoiceImage = document.querySelector('.mid_box1 img');
	let computerChoiceImage = document.querySelector('.mid_box2 img');

	let humanImageURL = './images/human-' + humanChoice + '.png';
	let computerImageURL = './images/computer-' + computerChoice + '.png';

	humanChoiceImage.setAttribute('src', humanImageURL);
	computerChoiceImage.setAttribute('src', computerImageURL);

}


if(getHumanChoice()) {
	getHumanChoice();
}