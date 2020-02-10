//// Восстановить порядок книг.
//// Заменить картинку заднего фона на другую из папки image
//// Исправить заголовок в книге 3 (Получится - "Книга 3. this и Прототипы Объектов")
// //Удалить рекламу со страницы
// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

let books = document.querySelectorAll('.books'),
  book = document.querySelectorAll('.book');
console.log(book, books);

books[0].insertBefore(book[1], book[0]);
books[0].insertBefore(book[4], book[3]);
books[0].insertBefore(book[2], null);

let bookTwo = document.querySelectorAll('book')[2];
console.log(bookTwo);

let header = document.getElementsByTagName('h2')[2];
header.innerHTML = 'Книга 3. this и Прототипы Объектов';

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

let adv = document.querySelector('.adv');
adv.style.display = 'none';

let newLi = document.createElement('li');
newLi.textContent = 'Глава 8: За пределами ES6';
book[2].appendChild(newLi);

// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

let li = book[0].querySelectorAll('li');
book[0].insertBefore(li[1], li[3]);