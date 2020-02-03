'use strict';

const getRandomInt = function (max) {
  return Math.floor(Math.random() * max);
};

const isNum = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = function () {

  const randomNumber = getRandomInt(100);
  console.log(randomNumber);

  function game() {
    const num = prompt('Ввeдите число от 1 до 100');

    if (num === null) {
      alert('Пока пока');
      return;
    }

    if (isNum(num)) {
      const realNum = +num;
      if (realNum > randomNumber) {
        alert('Загаднное число меньше');
        game();
      } else if (realNum < randomNumber) {
        alert('Загаданное число больше');
        game();
      } else {
        alert('Вы угадали!');
      game();
      }
    } else {
      alert('Введите число!');
      game();
    }
  }
  game();
};

start();