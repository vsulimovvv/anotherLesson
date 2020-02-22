"use strict";

class Options {
  constructor(height, width, backgroundColor, fontSize, selector) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.backgroundColor = backgroundColor;
    this.fontSize = fontSize;

    if (this.selector === '.block') {
      this.makeNewDiv();
    } else {
      this.makeNewP();
    }
  }

  makeNewDiv() {
    let newDiv = document.createElement('div');
    newDiv.className = 'new-div';
    document.body.appendChild(newDiv);
    newDiv.textContent = prompt("Любой текст", "");
    // newDiv.textContent = 'newDiv';
    newDiv.style.cssText = `height: ${this.height}; 
        width: ${this.width}; 
        background-color: ${this.backgroundColor}; 
        font-size: ${this.fontSize}; 
        text-align: ${this.textAlign}`;
  }
  makeNewP() {
    let newP = document.createElement('p');
    newP.id = 'new-p';
    document.body.appendChild(newP);
    newP.textContent = prompt("Любой текст", "");
    // newP.textContent = 'newP';
    newP.style.cssText = `height: ${this.height}; 
        width: ${this.width}; 
        background-color: ${this.backgroundColor}; 
        font-size: ${this.fontSize}; 
        text-align: ${this.textAlign}`;
  }
}

let newOptions = new Options(50, 100, 'yellow', 44, '#block');













// Задание
// 1) Сделать класс DomElement, который
//    содержит свойства
//   - selector, 
//   - height, 
//   - width, 
//   - bg, 
//   - fontSize
// содержит метод, который создает элемент на странице в зависимости от условия:  
// - если строка selector начинается с точки, создаем div с классом
// - если строка selector  начинается с решетки # то создаем параграф с id

// пример:
// если передана строка '.block', то функция конструктор создает элемент с class="block"
// если передана строка '#best', то функция конструктор создает элемент с id =best"
// с помощью cssText задавать стили: 
//   - высотой - height,
//   - шириной - width, 
//   - background - bg
//   - размер текста fontSize 
// внутрь созданного блока записывать любой текст. Метод записи может быть любым.
// 2) Создать новый объект на основе класса DomElement
// 3) Вызвать его метод чтобы получить элемент на странице
// 4) Добавить папку с уроком на свой GitHub