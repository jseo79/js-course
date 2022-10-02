'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);
//         }
//     }
//     printAge();

//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'jonas';
// let job = 'developer';
// const year = 1991;

// function addDecl(a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => a + b;

// console.log(numProducts);
// var numProducts = 10;
// console.log(numProducts);

// console.log(this);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//     firstName = 'Jonas',
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     },

//     greet: () => console.log(`Hey ${this.firstName}`),
// };
// jonas.calcAge();

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Jonas',
//     age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
