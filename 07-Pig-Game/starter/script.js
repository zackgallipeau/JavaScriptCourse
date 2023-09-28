'use strict';

const score1El = document.querySelector(`#score--0`);
const score2El = document.querySelector(`#score--1`);
const player1El = document.querySelector(`.player--0`);
const player2El = document.querySelector(`.player--1`);
//this array will hold the players total scores
const scores = [0, 0];

//the points the player builds up during their turn
let current = 0;

//tracks which player is active. 0 is player 1, 1 is player 2
let activePlayer = 0;

const current1El = document.querySelector(`#current--0`);
const current2El = document.querySelector(`#current--1`);

const player1 = document.querySelector(`player--0`);
const player2 = document.querySelector(`player--1`);

//sets the player scores to 0 at the beginning of the game
score1El.textContent = `0`;
score2El.textContent = `0`;

const diceEl = document.querySelector(`.dice`);
diceEl.classList.add(`hidden`);

const buttonDice = document.querySelector(`.btn--roll`);
const buttonHold = document.querySelector(`.btn--hold`);

buttonDice.addEventListener(`click`, function () {
  let roll = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${roll}.png`;
  diceEl.classList.remove(`hidden`);
  if (roll === 1) {
    current = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player1El.classList.toggle(`player--active`);
    player2El.classList.toggle(`player--active`);
    activePlayer = activePlayer === 0 ? 1 : 0; //if activePlayer is 0, sets it to 1, if 1, sets to 0
  } else {
    current += roll;
    console.log(roll);
    document.getElementById(`current--${activePlayer}`).textContent = current;
  }
});
