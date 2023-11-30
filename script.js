'use strict';
const roll = document.querySelector('.roll');
const diceEl = document.querySelector('.dice');
let red = 1;
let blue = 1;
let playing = 0;
let dice1 = 0;
let dice2 = 0;
let play1 = 0;
let play2 = 0;

function positionshow(val, val1) {
  if (val1 === 1) {
    document.querySelector(`.red${val}`).classList.remove('hide');
    document.querySelector(`.red${val}`).classList.add('show');
  } else {
    document.querySelector(`.blue${val}`).classList.remove('hide');
    document.querySelector(`.blue${val}`).classList.add('show');
  }
}
function positionhide(val, val1) {
  if (val1 === 1) {
    document.querySelector(`.red${val}`).classList.add('hide');
    document.querySelector(`.red${val}`).classList.remove('show');
  } else {
    document.querySelector(`.blue${val}`).classList.add('hide');
    document.querySelector(`.blue${val}`).classList.remove('show');
  }
}
roll.addEventListener('click', function () {
  if (playing === 0) {
    if (play1 === 1) {
      dice1 = Math.trunc(Math.random() * 6) + 1;
      console.log('1');
      diceEl.src = `image/dice-${dice1}.png`;
      blue += dice1;
      if (blue === 29) {
        document.querySelector('.player').textContent =
          '🥳Congrats Player1 you completed the game🎊';
        positionhide(blue - dice1, playing);
        positionshow(1, playing);
      } else if (blue > 29) {
        blue = blue - dice1;
        playing = 1;
        document.querySelector('.player').textContent = 'Player 2';
      } else {
        positionhide(blue - dice1, playing);
        positionshow(blue, playing);
        if (dice1 === 6) {
          playing = 0;
        } else {
          playing = 1;
          document.querySelector('.player').textContent = 'Player 2';
        }
      }
    } else {
      dice1 = Math.trunc(Math.random() * 6) + 1;
      console.log('1');
      diceEl.src = `image/dice-${dice1}.png`;
      if (dice1 === 6) {
        play1 = 1;
      } else {
        playing = 1;
        document.querySelector('.player').textContent = 'Player 2';
      }
    }
  } else {
    if (play2 === 1) {
      dice2 = Math.trunc(Math.random() * 6) + 1;
      console.log('2');
      diceEl.src = `image/dice-${dice2}.png`;
      red += dice2;
      if (red === 29) {
        document.querySelector('.player').textContent =
          '🥳Congrats Player2 you completed the game🎊';
        positionhide(red - dice2, playing);
        positionshow(1, playing);
      } else if (red > 29) {
        red = red - dice2;
        playing = 0;
        document.querySelector('.player').textContent = 'Player 1';
      } else {
        positionhide(red - dice2, playing);
        positionshow(red, playing);
        if (dice2 === 6) {
          playing = 1;
        } else {
          playing = 0;
          document.querySelector('.player').textContent = 'Player 1';
        }
      }
    } else {
      dice2 = Math.trunc(Math.random() * 6) + 1;
      console.log('1');
      diceEl.src = `image/dice-${dice2}.png`;
      if (dice2 === 6) {
        play2 = 1;
      } else {
        playing = 0;
        document.querySelector('.player').textContent = 'Player 1';
      }
    }
  }
});
