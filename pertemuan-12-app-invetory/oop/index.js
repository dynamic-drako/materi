console.log("tes");

// let person1 = {
//   name: "Impact",
//   age: "4",
//   detail: function () {
//     return `${this.name}`;
//   },
// };

// console.log(person1.name);
// console.log(person1.detail());

// let person2 = {
//   name: "Byte",
//   detail: function () {
//     return `${this.name}`;
//   },
// };

// console.log(person2.detail());

// // let name = "skilvul";
// const detail = (name) => {
//   console.log(name);
// };
// detail("skilvul");

// function Persons(name, age) {
//   this.name = name;
//   this.age = age;
//   this.detail = function () {
//     return `${this.name} berumur ${this.age}`;
//   };
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   detail() {
//     return `${this.name} berumur ${this.age}`;
//   }
// }
// let person1 = new Person("Impact", 30);
// let person2 = new Person("Impact", 30);
// let person3 = new Person("Impact", 30);
// let person4 = new Person("Impact", 30);

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.detail());
// console.log(person1);

// function grab(distance) {
//   let pricePerKM = 10000;
//   this.distance = distance;

//   this.price = function () {
//     return pricePerKM * distance;
//   };
// }

// let pelanggan1 = new grab(9);
// pelanggan1.pricePerKM = 5000;

// console.log(pelanggan1.price());

// inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  detail() {
    return `${this.name} berumur ${this.age}`;
  }
}

class People extends Person {
  constructor(name, age) {
    super(name, age);
  }
}

let people1 = new People("Thoriq", 15);
console.log(people1);
console.log(people1.detail());

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.study = function () {
//     return `${this.name} sedang belajar`;
//   };
// }

// function Teacher(name, age) {
//   Person.call(this, name, age);

//   this.teaching = function () {
//     console.log(`${this.name} sedang mengajar`);
//   };
// }

// let teacher = new Teacher("Alpha", 99);

// console.log(teacher);
// console.log(teacher.name);
// console.log(teacher.study());

// polymorphism
// class Animal {
//   animalSound() {
//     console.log("sound sound");
//   }
// }
// class Cat extends Animal {
//   animalSound() {
//     console.log("Meong");
//   }
// }

// class Dog extends Animal {
//   animalSound() {
//     console.log("Guk Guk");
//   }
// }

// let kucingGang = new Cat();
// kucingGang.animalSound();

// let anjing = new Dog();
// anjing.animalSound();

// abstraction
// class Hero {
//   constructor(hp, attack, defence) {
//     this.hp = hp;
//     this.attack = attack;
//     this.defence = defence;
//   }

//   fight() {
//     this.hp -= 10;
//     return this.hp;
//     // let darah = 100;
//     // console.log("darah", darah);
//   }

//   heal() {
//     this.hp += 100;
//     return this.hp;
//   }
// }

// let alpha = new Hero(100, 10, 10);
// console.log(alpha);
// console.log(alpha.fight());
// console.log(alpha.heal());
