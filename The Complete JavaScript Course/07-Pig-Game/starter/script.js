"use strict";

////////// VARIABLES
const dice = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");

////////// FUNCTIONS
function generateRandomNumber(n) {
  return Math.ceil(Math.random() * n);
}

function ShowDice() {
  if (dice.classList.contains("hidden")) {
    dice.classList.remove("hidden");
  }
}

function GenerateDice() {
  const i = generateRandomNumber(6);
  let imgArray = [];
  for (let i = 1; i < 7; i++) {
    imgArray.push(`dice-${i}.png`);
  }
  return imgArray[i];
}

function RollDice() {}

////////// EVENTS
rollBtn.addEventListener("click", () => {
  ShowDice();
});
