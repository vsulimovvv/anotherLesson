let myNumber = Math.floor(Math.random() * 101);
console.log(myNumber);
let userNumber;
let count = 3;

document.querySelector('.button').onclick = () => {
  let getUserNumber = function () {
    userNumber = +prompt('Ввeдите число от 1 до 100');
    if (count > 0) {
      count--;
      console.log('Попыток осталось: ' + count);
      if (myNumber === userNumber) {
        alert('вы угадали');
      } else if (userNumber < myNumber) {
        alert('Загаданное число больше');
        getUserNumber();
      } else if (userNumber > myNumber) {
        alert('Загаданное число меньше');
        getUserNumber();
      } else if (typeof userNumber !== 'Number') {
        alert('Нужно ввести число!');
        getUserNumber();
      } else if (userNumber === NaN) {
        alert('See you again!');
      }
    } else {
      alert('Попыток не осталось. Игра окончена');
    }
  };
  getUserNumber();
};