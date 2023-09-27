'use strict';
/*
console.log(document.querySelector('.message'));

document.querySelector(`.message`).textContent = 'Correct Number!';

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 11;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);

*/

let secretNumber = Math.trunc(Math.random() * 100) + 1;

let score = 20;

let highScore = 0;

function displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}

console.log(secretNumber);

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  //Makes sure that there is actually a number inputted
  if (!guess) {
    displayMessage('Please enter a number.');

    //When the guess is correct/the player wins
  } else if (guess === secretNumber) {
    score--;
    document.querySelector(`.score`).textContent = score;
    displayMessage('Correct Number!');
    document.querySelector(`body`).style.backgroundColor = '#60b347';
    document.querySelector(`.number`).style.width = '30rem';
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    //when the guess is wrong
  } else if (guess !== secretNumber && score > 1) {
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    score--;
    document.querySelector(`.score`).textContent = score;

    //   //when the score is too low
    // } else if (score > 1 && guess < secretNumber) {
    //   document.querySelector(`.message`).textContent = 'Too low!';
    //   score--;
    //   document.querySelector(`.score`).textContent = score;

    //   //when the score is too high
    // } else if (score > 1 && guess > secretNumber) {
    //   document.querySelector(`.message`).textContent = 'Too high!';
    //   score--;

    //when the player runs out of tries
  } else {
    document.querySelector(`.message`).textContent = 'You lost the game! :(';
    document.querySelector(`.score`).textContent = 0;
  }
});

//this resets the game when the "Again" button is pressed
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`body`).style.backgroundColor = '#222222';
  document.querySelector(`.number`).style.width = '15rem';
  document.querySelector(`.message`).textContent = 'Start guessing...';
  document.querySelector(`.guess`).value = '';
  document.querySelector(`.number`).textContent = '?';
});
