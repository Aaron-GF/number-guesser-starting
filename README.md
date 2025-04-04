# Number Guessing Game

This is an interactive number guessing game where the user needs to guess a secret number generated randomly by the system. The objective is to guess the number closest to the target number, which is generated in each round. The player competes against the computer, which also makes its own guess.

## Features

- **Target Number Generation**: A random number between 0 and 9 is generated at the start of each round.
- **Guess Comparison**: The player's and computer's guesses are compared to the target number, and the closest one wins the round.
- **Score Tracking**: The player’s and the computer’s scores are updated after each round.
- **Round Progression**: After each round, the round number increases and the game continues.

## Functions

- `generateTarget()`: Generates a random number between 0 and 9 to be guessed.
- `compareGuesses(humanGuess, computerGuess, targetGuess)`: Compares the player’s and computer’s guesses with the target number to determine the winner.
- `updateScore(winner)`: Updates the score of the winner (either human or computer).
- `advanceRound()`: Advances to the next round.

## How to Play

1. Enter a number between 0 and 9 in the input field.
2. Click the "Guess" button to see who wins the round.
3. The game automatically advances to the next round when you press "Next Round."

## Technologies Used

- HTML
- CSS
- JavaScript
