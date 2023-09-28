'use strict';

//sets the state of the game to active
let playing = true;

//these are the players "held" scores
let score1El = document.querySelector(`#score--0`);
let score2El = document.querySelector(`#score--1`);

//this array will hold the players total scores
let scores = [0, 0];

//the points the player builds up during their turn
let current = 0;

//tracks which player is active. 0 is player 1, 1 is player 2
let activePlayer = 0;

//selects the dice image
const diceEl = document.querySelector(`.dice`);

//selects the player1 or player2 divs so we can toggle which is active
const player1El = document.querySelector(`.player--0`);
const player2El = document.querySelector(`.player--1`);

//allows us to change the "current" score of either player
const current1El = document.querySelector(`#current--0`);
const current2El = document.querySelector(`#current--1`);

//allows us to select the "roll dice", "hold", and "reset" buttons
const buttonDice = document.querySelector(`.btn--roll`);
const buttonHold = document.querySelector(`.btn--hold`);
const buttonReset = document.querySelector(`.btn--new`);

function resetGame() {
  //sets the player scores to 0
  score1El.textContent = `0`;
  score2El.textContent = `0`;

  //sets current scores to 0
  current1El.textContent = '0';
  current2El.textContent = '0';

  //sets the activePlayer to player1
  activePlayer = 0;

  //hides the dice at the start of the game. it reappears once the first die is rolled
  diceEl.classList.add(`hidden`);
  player1El.classList.remove(`player--winner`);
  player2El.classList.remove(`player--winner`);

  playing = true;

  //resets the "current" score that has been being built up by the rolls
  current = 0;

  //resets player scores
  scores = [0, 0];
}
resetGame();

//switches which player is active and sets their curent score to 0
function swapPlayers() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  player1El.classList.toggle(`player--active`);
  player2El.classList.toggle(`player--active`);
  current = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //if activePlayer is 0, sets it to 1, if 1, sets to 0
}

//roll dice functionality
buttonDice.addEventListener(`click`, function () {
  if (playing) {
    let roll = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${roll}.png`;
    diceEl.classList.remove(`hidden`);
    if (roll === 1) {
      swapPlayers();
    } else {
      current += roll;
      console.log(roll);
      document.getElementById(`current--${activePlayer}`).textContent = current;
      console.log(current);
    }
  }
});

//hold button functionality
buttonHold.addEventListener(`click`, function () {
  if (playing) {
    scores[activePlayer] += current; //adds the current score to the players score
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer]; //updates the current players score
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`); //adds winning player classlist to the active player if they have a score equal to or above 100
    } else {
      swapPlayers();
    }
  }
});

buttonReset.addEventListener(`click`, resetGame);
