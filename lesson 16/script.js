class First {
  hello() {
    console.log('Привет, я метод родителя!');
  }
}

class Second extends First {
  hello() {
    super.hello();
    console.log('А я наследуемый метод!');
  }
}

let first = new First('first');
let second = new Second('second');
second.hello();


// second.hello1();


// class Second {
//   hello() {
//     console.log('А я наследуемый метод!');
//   }
// }
