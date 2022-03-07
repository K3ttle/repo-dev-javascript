"use strict";

////////// FUNCTIONS

// Generate random number between 1 and n
function generateRandomNumber(n) {
  return Math.ceil(Math.random() * n);
}

function setMessage(message) {
  document.querySelector(".message").textContent = message;
}

function setBodyBackgoundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function setNumber(n) {
  document.querySelector(".number").textContent = n;
}

function setHighScore() {
  document.querySelector(".highscore").textContent = score;
}

function setScore(subtract) {
  if (subtract === true) {
    document.querySelector(".score").textContent = --score;
  } else {
    document.querySelector(".score").textContent = score;
  }
}

function getGuessValue(params) {
  return Number(document.querySelector(".guess").value);
}

function resetGuessValue() {
  document.querySelector(".guess").value = null;
}

////////// VARIABLES

let randomNumber = generateRandomNumber(20);
let score = 20;

// Display random number
// document.querySelector(".number").textContent = randomNumber;

////////// LOGIC

// Create listen event for check button
document.querySelector(".check").addEventListener("click", () => {
  const userGuess = getGuessValue();

  // Check if number between 1 - 20
  if (!(userGuess > 0 && userGuess < 21)) {
    setMessage("Invalid guess!");

    // Display msg if guess correct
  } else if (userGuess === randomNumber) {
    setBodyBackgoundColor("#60b347");
    setNumber(randomNumber);
    setMessage("Correct!");
    setHighScore();
    score = 20; // Reset score to 20

    // Display msg if guess too high/low and -1 from score
  } else if (score !== 0) {
    setScore(true);
    if (userGuess > randomNumber) {
      setMessage("Go lower!");
    } else if (userGuess < randomNumber) {
      setMessage("Go higher!");
    }

    // Display message if score 0
  } else {
    setMessage("You lost! :(");
  }
});

// Event listening for again button
document.querySelector(".again").addEventListener("click", () => {
  randomNumber = generateRandomNumber(20); // Reset random number
  setBodyBackgoundColor("#222");
  setMessage("Start guessing...");
  setNumber("?");
  score = 20; // Reset score variable
  setScore(false); // Reset score to 20
  resetGuessValue();
});
