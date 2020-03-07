// Вывести текущий день и время  на страницу в таком формате
// Добрый день (утро, вечер, ночь в зависимости от времени суток)
// Сегодня: Понедельник
// Текущее время:12:05:15 PM
// До нового года осталось 175 дней

let out = document.querySelector('.out'),
  out2 = document.querySelector('.out2'),
  out0 = document.querySelector('.out0'),
  nowDate = new Date(),
  day = nowDate.getDate(),
  month = nowDate.getMonth() + 1,
  year = nowDate.getFullYear(),
  hour = nowDate.getHours(),
  minutes = nowDate.getMinutes(),
  seconds = nowDate.getSeconds();

if (hour >= 7 && hour <= 12) {
  out0.textContent = 'Доброе утро';
} else if (hour >= 13 && hour <= 17) {
  out0.textContent = 'Добрый день';
} else if (hour >= 18 && hour <= 22) {
  out0.textContent = 'Добрый вечер';
} else if (hour >= 23 && hour <= 7) {
  out0.textContent = 'Доброе ночи';
}

function getWeekDay(d) {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[d.getDay()];
}
let d = new Date();
out.textContent = 'Сегодня: ' + getWeekDay(d);

if (hour >= 12) {
  out2.textContent = 'Текущее время: ' + hour + ':' + minutes + ':' + seconds + ' PM';
} else {
  out2.textContent = 'Текущее время: ' + hour + ':' + minutes + ':' + seconds + ' AM';
}

window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // Timer
  function countTimer(deadline) {
    let timerDays = document.querySelector('.out-days');

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        days = Math.floor(timeRemaining / 60 / 60 / 24);
      console.log(timeRemaining)
      return {
        timeRemaining,
        days
      }
    }

    function updateClock() {
      let timer = getTimeRemaining();

      timerDays.textContent = 'До Нового Года осталось ' + (('0' + timer.days).slice(-2)) + ' дней';
      if (timer.timeRemaining > 0) {
        setInterval(updateClock, 1000);
      } else {
        timerDays.textContent = '00';
      }
    }
    updateClock();
  }
  setInterval(countTimer, 1000, '1 january 2021')
});