let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
} //Generate random number between 0 and 9.

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
} //Compare the absolute difference between the guesses and the target number.

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
} //used to correctly increase the winner's score after each round

// Advances the game to the next round by incrementing the currentRoundNumber variable to track the game's progress.
function advanceRound() {
    currentRoundNumber += 1;
}
