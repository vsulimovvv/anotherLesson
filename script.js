const addZero = function (num) {
  if (num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}

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
console.log(hour);


if (hour >= 5 && hour < 12)
  out0.innerHTML = "Доброе утро";
else if (hour >= 12 && hour < 18)
  out0.innerHTML = "Добрый день";
else if (hour >= 18 && hour < 24)
  out0.innerHTML = "Добрый вечер";
else if (hour >= 0 && hour < 5)
  out0.innerHTML = "Доброй ночи";


function getWeekDay(d) {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[d.getDay()];
}
let d = new Date();
out.textContent = 'Сегодня: ' + getWeekDay(d);

if (hour >= 12) {
  out2.textContent = 'Текущее время: ' + addZero(hour) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' PM';
} else {
  out2.textContent = 'Текущее время: ' + addZero(hour) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' AM';
}

window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // Таймер до НГ
  function countTimer(deadline) {
    let timerDays = document.querySelector('.out-days');

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        days = Math.floor(timeRemaining / 60 / 60 / 24);
      return {
        timeRemaining,
        days
      }
    }

    function updateClock() {
      let timer = getTimeRemaining();
      if (timer.timeRemaining > 0) {
        timerDays.textContent = 'До Нового Года осталось ' + addZero(timer.days) + ' дней';
      } else {
        timerDays.textContent = 'До Нового Года осталось ' + '00 дней';;
      }
    }
    updateClock();
  }
  setInterval(countTimer, 1000, '31 dec 2020');
});