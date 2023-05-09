'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'heelo';

// document.querySelector('.number').textContent = '12';
// console.log(document.querySelector('.number').textContent);

// document.querySelector('.guess').value = 8;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

// Number(document.querySelector('.score').textContent);

// console.log(score, typeof score);

document.querySelector('.check').addEventListener('click', function () {
  const check = Number(document.querySelector('.guess').value);
  console.log(check);
  if (!check) {
    document.querySelector('.message').textContent = 'Enter a number first!';
  } else if (check === secretNumber) {
    document.querySelector('.message').textContent = 'Correct guess You won!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    let score = Number(document.querySelector('.score').textContent);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (check > secretNumber) {
    document.querySelector('.message').textContent = 'Too High!';
    let score = Number(document.querySelector('.score').textContent);
    if (score > 1) {
      document.querySelector('.score').textContent = score - 1;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (check < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    let score = Number(document.querySelector('.score').textContent);
    if (score > 1) {
      document.querySelector('.score').textContent = score - 1;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
});
