'use strict';

const score0El = document.querySelector('#score--0');
//another way to select Ids
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currScore, activePlayer, playing;

// Starting conditions
const init = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');

    scores = [0, 0];
    currScore = 0;
    activePlayer = 0;
    playing = true;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

const switchPlayers = function () {
    currScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

const gameWon = function () {
    playing = false;
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    diceEl.classList.add('hidden');
};

// Rolling dice funcitonality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. check for rolled 1. if true, switch to next player
        if (dice !== 1) {
            currScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currScore;
        } else {
            switchPlayers();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            gameWon();
        } else {
            switchPlayers();
        }
    }
});

btnNew.addEventListener('click', init);
