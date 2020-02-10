let books = document.querySelectorAll('.books'),
  book = document.querySelectorAll('.book');

books[0].insertBefore(book[1], book[0]);
books[0].insertBefore(book[4], book[3]);
books[0].insertBefore(book[2], null);

let header = document.getElementsByTagName('h2')[2];
header.innerHTML = 'Книга 3. this и Прототипы Объектов';

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

let adv = document.querySelector('.adv');
adv.style.display = 'none';

let bookSix = document.querySelectorAll('ul')[5];
let newLi = document.createElement('li');
newLi.textContent = 'Глава 8: За пределами ES6';
bookSix.appendChild(newLi);
let liSix = bookSix.querySelectorAll('li');
bookSix.insertBefore(newLi, liSix[9]);

let bookTwo = document.querySelectorAll('ul')[1];
let liTwo = bookTwo.querySelectorAll('li');
bookTwo.insertBefore(liTwo[2], liTwo[8]);
bookTwo.insertBefore(liTwo[6], liTwo[4]);
bookTwo.insertBefore(liTwo[8], liTwo[4]);
bookTwo.insertBefore(liTwo[9], liTwo[2]);

let bookFive = document.querySelectorAll('ul')[4];
let liFive = bookFive.querySelectorAll('li');
bookFive.insertBefore(liFive[9], liFive[2]);
bookFive.insertBefore(liFive[5], liFive[8]);
bookFive.insertBefore(liFive[2], liFive[4]);
bookFive.insertBefore(liFive[4], liFive[2]);