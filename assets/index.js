'use strict';
// Перше завдання
/*const returnTheLargestNumber = function (number1,number2) {
  let resultLargestNumber = number2;
  if (typeof number1 !== 'number' || typeof number2 !== 'number' || isNaN(number1) || isNaN(number2)) {
  return null;
  }
  if (number1 > number2) {
    resultLargestNumber = number1;
    return resultLargestNumber;
  } 
    resultLargestNumber = number2;
    return resultLargestNumber;
} */
// returnTheLargestNumber();
/*
returnTheLargestNumber(); 
const isEven = function (number1) {
  let resultEven = true;
  if(typeof number1 !== 'number' || isNaN(number1)) {
    return null;
  } else if (number1 % 2 !== 0) {
    resultEven = false;
  } return resultEven;
};
isEven(); */
// Цикли. Перше завдання
/* const password = "makskuh";
for (let i = 0; i < 5; i++) {
  let answerPassword;
  answerPassword = prompt("введіь пароль");
  if (answerPassword === password) {
    alert("Пароль вірний!");
    break;
  }
} */
// Цикли. Друге завдання
/* for (let i = 30; i >= 0 ; i--) {
  console.log(i)
} 
// Цикли. Третє завдання
let result = 0;

for(let i = 0 ; i <= 100;i++) {
result = result + i; 
} 
console.log(result);*/
/*
const returnFullName = function (firstName, lastName) {
  return this.firstName + " " + this.lastName;
};
const UserName = function (firstName, lastName, isMale, age, speak) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.isMale = isMale;
  this.age = age;
  this.speak = function (whatIsSpeak) {
    return whatIsSpeak;
  };
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
};

const newUserName1 = new UserName("Vasiliy", " Stus", true, 43);
const newUserName2 = new UserName("Oleksanr", " Bobul", true, 22);
*/

/* const user = {
  firstName: 'Test',
  lastName: 'Testenko',
  age: '125',
  isMale: true,
}

const user2 = {
  100: 350,
  firstName: 'Testtt',
  lastName: 'Testfdfdfdfdf',
  age: '125',
  isMale: true,
}

function greetingsUser(user) {
  return alert(`Hello Dear ${user.firstName} , your last name ${user.lastName} ?`)
}


const promptKey = prompt('Введіть назву ключа'); 
const promptValue = prompt('Введіть значення ключа');
user2[promptKey] = promptValue; */

// function CreateCatFunction(name, breed, age) {
//   this.name = name;
//   this.breed = breed;
//   this.age = age;
// }
// const whatCanDoCat = {
//   speak: function (meow) {
//     console.log(meow);
//     return `${this.name} only can say 'meow'`;
//   },
//   walk: function () {
//     return this.age > 1 ? `${this.breed} can walk` : `${this.breed} can't walk`;
//   },
// }

// CreateCatFunction.prototype = speakPrototype;

// const Cat1 = new CreateCatFunction('Vasil', 'Kit', 10);

// function Ladder(currentStep) {
//   this.currentStep = currentStep;
// }
// const stepMethods = {
//   up: function () {
//     return this.currentStep++;
//   },
//   down: function () {
//     if (this.currentStep > 0) {
//       return this.currentStep--;
//     }
//     const error = new TypeError('Нижче землі не лізь');
//     throw error;
//   },
//   showStep: function () {
//     return this.currentStep;
//   },
// };
// Ladder.prototype = stepMethods;
// const ladder1 = new Ladder(3);
// const ladder2 = new Ladder(10);
// const ladder3 = new Ladder(22);

// try {
//   stepMethods.down();
//   }
// catch(err) {
//     console.log(err.message);
// }

// ============================
// function MyArray() {
//   this.length = 0;
// }

// function MyArrayProto() {
//   this.push = function (newElem) {
//     // записати елемент
//     this[this.length] = newElem;
//     // оновили довжину масиву
//     this.length++;
//     return this.length;
//   };

//   this.pop = function () {

//     if(this.length > 0) {
//       const lastItem = this[this.length - 1];
//       delete this[--this.length];

//       return lastItem;
//     }

//     return undefined;
//   };
//   this.unshift = function(newElem,i) {
//   this[this.]
//   }
// }

// MyArray.prototype = new MyArrayProto();

// const myArr1 = new MyArray();

// const arr = [];
// const searchTypeof = (...numbers) =>
//   numbers.filter((value) => typeof value === 'number').length;

// const createAdder = (i) => (value) => (i += value);

// const adder = createAdder(10);

// const calculator =
//   (operator) =>
//   (...values) =>
//     values.reduce((acc, values) => (acc += values));
// const sumNumb = calculator();

// const calc = (operator) =>
//   function (...numbers) {
//     if (operator === '+') {
//       return numbers.reduce((acc, value) => (acc += value));
//     }
//     if (operator === '-') {
//       return numbers.reduce((acc, value) => (acc -= value));
//     }
//     if (operator === '*') {
//       return numbers.reduce((acc, value) => (acc *= value), 1);
//     }
//     if (operator === '/') {
//       return numbers.reduce((acc, value) => (acc /= value), 1);
//     }
//   };
// const calcSum = calc('+');
// const calcMinus = calc('-');
// const calcMultiply = calc('*');
// const calcDivide = calc('/');

// function factorial(number) {
//   if(number < 0) {
//     throw new RangeError('cant use negative');
//   }
//   if(number === 0) {
//     return 1;
//   }
//   return number*factorial(number-1);
// }

// function returnBracket(number) {
//   if (number < 0) {
//     throw new RangeError('cant use negative');
//   }
//   if (number === 1) {
//     return '()';
//   }
//   if (number > 1) {
//     return '(' + returnBracket(number - 1) + ')';
//   }
// }
// class Worker {
//   #private;
//   constructor(name, lastname, expirience, age) {
//     this.#private = '2222'
//     this.name = name;
//     this.lastname = lastname;
//     this.expirience = expirience;
//     this.age = age;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     if (typeof newName !== 'string' || newName === '') {
//       throw new TypeError('Invalid data for name');
//     }
//     return (this._name = newName);
//   }

//   get lastName() {
//     return this._name;
//   }
//   set lastName(newLastName) {
//     if (typeof newLastName !== 'string' || newLastName === '') {
//       throw new TypeError('Invalid data for  lastname');
//     }
//     return (this._lastname = newLastName);
//   }
//   get expirience() {
//     return this._expirience;
//   }
//   set expirience(newExpirience) {
//     if (typeof newExpirience !== 'number' || newExpirience < 0) {
//       throw new TypeError('Invalid data for expirience');
//     }
//     return (this._expirience = newExpirience);
//   }
//   get age() {
//     return this._age;
//   }
//   set age(newAge) {
//     if (typeof newAge !== 'number' || newAge < this.age || newAge < 0) {
//       throw new TypeError('Invalid data for age');
//     }
//     return (this._age = newAge);
//   }
//   get fullName() {
//     return `${this.name}  ${this.lastname}`;
//   }

//   isAdult() {
//     return this.age >= 18;
//   }
// }

// const worker1 = new Worker('Andriy', 'Testenko', 12, 20);
// let product1 = ['кола', 'фанта', 'спрайт', 'пепси'];
// class Order {
//   constructor(customer, address, status, product) {
//     this.customer = customer;
//     this.address = address;
//     this.status = status;
//     this.product = product;
//   }
//   print() {
//     return `Замовлення клієнта  ${this.customer.name} ${this.customer.lastname}, який замовив ${this.product} прямує  в ${this.address} та має статус ${this.status}`;
//   }
// }
// const order1 = new Order(worker1, 'Вокзальна,2', 'активне', product1);
// class User {
//   constructor(name, login, age) {
//     this.name = name;
//     this.login = login;
//     this.age = age;
//     this.isBaned = false;
//   }
//   createMessage() {
//     console.log('created message');
//   }
//   static isUser(user) {
//     return user instanceof User;
//   }
// }
// class Moderator extends User {
//   constructor(name, login, age, opportunities) {
//     super(name, login, age);
//     this.opportunities = opportunities;
//   }
//   deleteMessage() {
//     console.log('deleted message');
//   }
// }
// class Admin extends Moderator {
//   constructor(name, login, age, opportunities, main) {
//     super(name, login, age, opportunities);
//     this.main = main;
//   }
//   banUser(user) {
//     if (!User.isUser(user)) {
//       throw new TypeError('You can ban only user');
//     }
//     if (!(user instanceof Admin)) {
//       throw new TypeError('You can ban only user');
//     }
//     user.isBaned = true;
//   }
//   unBan(user) {
//     if (!User.isUser(user)) {
//       throw new TypeError('Succes, user unbanned');
//     }
//     user.isBaned = false;
//   }
// }

// class Figure {
//   constructor(name) {
//     this.name = name;
//   }

//   getArea() {}
// }

// const figure1 = new Figure('figure');

// class Triangle extends Figure {
//   constructor(a, h) {
//     super('triangle');
//     this.a = a;
//     this.h = h;
//   }

//   getArea() {
//     return this.a * this.h * 0.5;
//   }
// }

// const triangle1 = new Triangle(5, 7);

// class Square extends Figure {
//   constructor(a) {
//     super('square');
//     this.a = a;
//   }

//   getArea() {
//     return this.a * this.a;
//   }
// }

// class Circle extends Figure {
//   constructor(r) {
//     super('circle');
//     this.r = r;
//   }
//   getArea() {
//     return Math.PI * this.r * this.r;
//   }
// }
// const circle1 = new Circle(5);
// const square1 = new Square(8);

// function getFigureArea(figure) {
//   if (figure instanceof Figure) {
//     return figure.getArea();
//   }

//   throw new TypeError('You must provide Figure instance');
// }

// const ANIMAL_STATUS = {
//   WALKING:'walking',
//   EATING:'eating',
//   SLEEPIGN: 'sleeping'
// }
// class Animal {
//   constructor(animal, name) {
//     this.animal = animal;
//     this.name = name;
//     this.isWalking = true;
//     this.isEating = true;
//     this.isSleeping = true;
//     this.status = '';
//   }
//   static isAnimal(animal) {
//     return animal instanceof Animal;
//   }
// }
// class Cat extends Animal {
//   constructor(name) {
//     super('cat', name);
//   }
// }
// class Dog extends Animal {
//   constructor(name) {
//     super('dog', name);
//   }
// }
// class Hamster extends Animal {
//   constructor(name) {
//     super('hamster', name);
//   }
// }
// class Trainer extends Animal {
//   constructor(name) {
//     super('its trainer,not animal!', name);
//   }
//   feed(animal) {
//     if (!Animal.isAnimal(animal)) {
//       throw new TypeError('You can feed only animals');
//     }
//     animal.isSleeping = false;
//     animal.isWalking = false;
//     animal.isEating = true;
//     return animal.status = ANIMAL_STATUS.EATING;
//   }
//   walk(animal) {
//     if (!Animal.isAnimal(animal)) {
//       throw new TypeError('You can walk only animals');
//     }
//     animal.isSleeping = false;
//     animal.isWalking = true;
//     animal.isEating = true;
//     return animal.status = ANIMAL_STATUS.WALKING;
//   }
// }

// const cat1 = new Cat('Vasiliy');
// const dog1 = new Dog('Volt');
// const hamster1 = new Hamster('Biggi');
// const trainer1 = new Trainer('Oleksandr');

// const names = ['test','user','adam','anton','petro'];
// const names2 = ['anna','andriy','user','test'];
// const concatNames = [];
// const set = new Set([...names,...names2])
// set.forEach((value)=> {
//  concatNames.push(value)
// })

