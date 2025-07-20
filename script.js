// Initialize scores for computer and human players
let humanScore = 0;
let computerScore = 0;
let round = 1;
let humanWinTracker = false;
let computerWinTracker = false;

// UI
const humanChoiceLabel = document.querySelector("#human");
const computerChoiceLabel = document.querySelector("#computer");
const roundLabel = document.querySelector('#round_label');
const humanScoreLabel = document.querySelector('#human_score');
const computerScoreLabel = document.querySelector('#computer_score');
const humanChoiceImage = document.querySelector('.mid_box1 img');
const computerChoiceImage = document.querySelector('.mid_box2 img');
const result_description = document.querySelector('#result_description');
const choicesBtns = document.querySelectorAll('#choices button');
const playBtn = document.querySelector('#play');
const instructionTxt = document.querySelector('#instruction');

let humanSelection = '';
let computerSelection = '';

// Initialize scores for UI labels
// humanScoreLabel.textContent = humanScore;
// computerScoreLabel.textContent = computerScore;


// Function to get the human player's choice via buttons
function getHumanChoice() {
	let choices = document.querySelector('#choices');

	choices.addEventListener('click', (e) => {
		instructionTxt.classList.add('d_none');
		let choiceBtn = e.target.closest('button');
		if (!choiceBtn) {return; }
		if (choiceBtn) {roundLabel.textContent = 'Round ' + round;}
		humanSelection = choiceBtn.id;
		computerSelection = getComputerChoice();

		humanChoiceLabel.textContent = humanSelection;
		computerChoiceLabel.textContent = computerSelection;

		updateChoicesImage(humanSelection, computerSelection);

		let playGameResult = playGame(computerSelection, humanSelection);
		// ----------------------------------------------------
		// console.log(`${playGameResult.result} ${playGameResult.humanWinTracker}, ${playGameResult.computerWinTracker}`);
		// ----------------------------------------------------
		playRound(playGameResult.result, playGameResult.humanWinTracker, playGameResult.computerWinTracker);

		humanScoreLabel.textContent = humanScore;
		computerScoreLabel.textContent = computerScore;
		round++;
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

	let resultObj = {};

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


function playRound(playGameResult, humanWinTracker, computerWinTracker) {
	// ----------------------------------------------------
	// REMOVE THIS TO SHOW RESULTS IN CONSOLE LOG
	// console.log(`\n🎮 Round ${round} Results:`);
	// console.log(`👤 Human chose: ${humanSelection}`);
	// console.log(`🤖 Computer chose: ${computerSelection}`);
	// ----------------------------------------------------

	// ----------------------------------------------------
	// REMOVE THIS TO SHOW RESULTS IN CONSOLE LOG
	// console.log(`humanWinTracker: ${humanWinTracker}`);
	// console.log(`computerWinTracker: ${computerWinTracker}`);
	// ----------------------------------------------------

	if(playGameResult) {
		if (humanWinTracker) {
			result_description.textContent = `🏆 You won this round!`;
			// ----------------------------------------------------
			// REMOVE THIS TO SHOW RESULTS IN CONSOLE LOG
			// console.log("🏆 You won this round!");
		} 

		if (computerWinTracker) {
			result_description.textContent = `💻 Computer won this round!`;
			// ----------------------------------------------------
			// REMOVE THIS TO SHOW RESULTS IN CONSOLE LOG
			// console.log("💻 Computer won this round!");
		}
	} else {
		result_description.textContent = `🤝 It's a tie!`;
		// ----------------------------------------------------
		// REMOVE THIS TO SHOW RESULTS IN CONSOLE LOG
		// console.log("🤝 It's a tie!");
		// ----------------------------------------------------
	}
	
	// ----------------------------------------------------
	// REMOVE THIS TO SHOW RESULTS IN CONSOLE LOG
	// console.log(`Scoreboard: Human ${humanScore} - ${computerScore} Computer`);
	// ----------------------------------------------------

	if (humanScore >= 5 || computerScore >= 5) {
		// ----------------------------------------------------
		// REMOVE THIS TO SHOW RESULTS IN CONSOLE LOG
		// console.log("\n\n-------------------------------------------------------");
		// console.log("🎉 FINAL RESULT 🎉");
		// ----------------------------------------------------

		if(humanScore > computerScore) {
			result_description.textContent = `🏆 YOU WON THE GAME!`;
			// console.log("🏆 YOU WON THE GAME!") 
			result_description.classList.add('win');
		} else { 
			result_description.textContent = `🤖 COMPUTER WINS!`;
			// console.log("💻 COMPUTER WINS THE GAME!");
			result_description.classList.add('lose');
		}
		
		// ----------------------------------------------------
		// REMOVE THIS TO SHOW RESULTS IN CONSOLE LOG
		// console.log("-------------------------------------------------------");
		// ----------------------------------------------------

		for(let choicesBtn of choicesBtns) {
			choicesBtn.setAttribute('disabled', 'true');
		}

		playBtn.classList.remove('d_none');
		playAgainBtn();
	}

}


function playAgainBtn() {
	playBtn.addEventListener('click',  () => {
		playBtn.classList.add('d_none');

		for(let choicesBtn of choicesBtns) {
			choicesBtn.removeAttribute('disabled');
		}

		// Reset backend
		computerScore = 0;
		humanScore = 0;	
		round=1;

		// Reset display
		humanScoreLabel.textContent = humanScore;
		computerScoreLabel.textContent = computerScore;
		roundLabel.textContent = 'Round ' + round;
		
		humanChoiceImage.setAttribute('src', './images/human-question-mark.png');
		computerChoiceImage.setAttribute('src', './images/computer-question-mark.png');

		result_description.classList.remove('win');
		result_description.classList.remove('lose')
	});
}


// UI
function updateChoicesImage(humanChoice, computerChoice) {
	let humanImageURL = './images/human-' + humanChoice + '.png';
	let computerImageURL = './images/computer-' + computerChoice + '.png';

	humanChoiceImage.setAttribute('src', humanImageURL);
	computerChoiceImage.setAttribute('src', computerImageURL);
}


if(getHumanChoice()) {
	getHumanChoice();
}