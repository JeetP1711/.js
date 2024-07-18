// // 1. Simple Programm

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let person = new Person("John", 30);
// console.log(person.name); // John
// console.log(person.age); // 30

// // 2. Class with Method

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(Hello, my name is ${ this.name } and I am ${ this.age } years old.);
//     }
// }
// let person = new Person("John", 30);
// person.greet(); // Hello, my name is John and I am 30 years old.

// //   3. Inheritance

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     sound() {
//         console.log("The animal makes a sound.");
//     }
// }
// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     sound() {
//         console.log("The dog barks.");
//     }
// }
// let dog = new Dog("Fido");
// dog.sound(); // The dog barks.

// //   4. Getters and Setters

// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         this._name = value;
//     }
//     get age() {
//         return this._age;
//     }
//     set age(value) {
//         this._age = value;
//     }
// }
// let person = new Person("John", 30);
// console.log(person.name); // John
// person.name = "Jane";
// console.log(person.name); // Jane

// //   5. Static Methods

// class Person {
//     static greet() {
//         console.log("Hello!");
//     }
// }
// Person.greet(); // Hello!

// //   6. Static Properties

// class Person {
//     static count = 0;
// }
// console.log(Person.count); // 0

// //   7. Private Members

// class Person {
//     #name;
//     constructor(name) {
//         this.#name = name;
//     }
//     getName() {
//         return this.#name;
//     }
// }
// let person = new Person("John");
// console.log(person.getName()); // John

// //      8. Public Members

// class Person {
//     name;
//     constructor(name) {
//         this.name = name;
//     }
// }
// let person = new Person("John");
// console.log(person.name); // John

// //   9. Protected Members

// class Person {
//     _name;
//     constructor(name) {
//         this._name = name;
//     }
//     getName() {
//         return this._name;
//     }
// }
// let person = new Person("John");
// console.log(person.getName()); // John

// //   10. Class Expression

// let Person = class {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// };
// let person = new Person("John", 30);
// console.log(person.name); // John
// console.log(person.age); // 30

// //   11. Class Declaration

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let person = new Person("John", 30);
// console.log(person.name); // John
// console.log(person.age); // 30

// //   11. Class Declaration

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let person = new Person("John", 30);
// console.log(person.name); // John
// console.log(person.age); // 30

// //   12. Static Block

// class Person {
//     static {
//         Person.count = 0;
//     }
// }
// console.log(Person.count); // 0

// //   13. Private Static Method

// class Person {
//     static #count = 0;
//     static {
//         Person.#count = 0;
//     }
//     static getCount() {
//         return Person.#count;
//     }
// }
// console.log(Person.getCount()); // 0

// //   14. Public Static Method

// class Person {
//     static greet() {
//         console.log("Hello!");
//     }
// }
// Person.greet(); // Hello!

// //   15. Abstract Class

// abstract class Animal {
//     abstract sound();
// }
// class Dog extends Animal {
//     sound() {
//         console.log("The dog barks.");
//     }
// }
// let dog = new Dog();
// dog.sound(); // The dog barks.

// //   16. Interface

// interface Animal {
//     sound(): void;
// }
// class Dog implements Animal {
//     sound() {
//         console.log("The dog barks.");
//     }
// }
// let dog = new Dog();
// dog.sound(); // The dog barks.