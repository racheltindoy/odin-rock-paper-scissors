// Initialize scores for computer and human players
let computerScore = 0;
let humanScore = 0;

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

	if (humanChoice === computerChoice) {
		return false;
	} else {
		switch(humanChoice) {
		case "rock":
			computerChoice == "paper" ? (humanScore += 1) : (computerScore +=1); 
			break;
		case "paper":
			computerChoice == "rock" ? (humanScore += 1) : (computerScore +=1); 
			break;
		case "scissors":
			computerChoice == "rock" ? (humanScore += 1) : (computerScore +=1); 
			break;
		}
		return true;
	}
	
}

// Play the game for 5 rounds
for(i = 0; i<5; i++) {
	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();

	if (playGame(humanSelection, computerSelection)) {
	console.log("Human : " + humanScore);
	console.log("Computer: " + computerScore);
	} else {
		console.log("It's a tie!");
	}

}
