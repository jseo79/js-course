'use strict';

let correctNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (score > 0) {
        if (!guess) {
            displayMessage('No number!');
        } else if (guess === correctNum) {
            displayMessage('Correct Number!');

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = correctNum;
            document.querySelector('.number').style.width = '30rem';

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else if (guess !== correctNum) {
            displayMessage(guess > correctNum ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    if (score === 0) {
        displayMessage('You lost :(');
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    correctNum = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...!';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});
