'use strict';
//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');
let newGameEl = document.querySelector('.btn--new');
let rollDiceEl = document.querySelector('.btn--roll');
let holdEl = document.querySelector('btn--hold');

//initial starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//rolling dice functionality
rollDiceEl.addEventListener('click', () => {
  //1 generate random no.
  let dice = Math.trunc(Math.random() * 6) + 1;

  console.log(dice);

  //display dice
  diceEl.classList.remove('hidden');

  diceEl.src = `dice-${dice}.png`;

  //check for roll 1: if true switch to next variable

  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
