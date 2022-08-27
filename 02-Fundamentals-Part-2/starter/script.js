'use strict';

// function logger() {
//     console.log('My name is Jonas');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(2000);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(2000);
// console.log(age2);


// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsRetire = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     const name = firstName;
//     return (`It will take ${firstName} ${retirement} years to retire!`);
// }

// console.log(yearsRetire(1991, 'Joseph'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsRetire = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return retirement;
//     } else {
//         return -1;
//     }

//     const name = firstName;
//     return (`It will take ${firstName} ${retirement} years to retire!`);
// }

// console.log(yearsRetire(1991, 'Joseph'));
// console.log(yearsRetire(1931, 'Mike'));

// const calcAverage = function (score1, score2, score3) {
//     const avg = (score1 + score2 + score3) / 3;
//     return avg;
// }

// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);

// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins!');
//     }
// }

// const game1 = checkWinner(avgDolphins1, avgKoalas1);

// const game2 = checkWinner(avgDolphins2, avgKoalas2);

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const yearss = new Array(1991, 1984, 2008, 2020);


// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'
// console.log(friends);

// const firstName = 'Jonas'
// const jonas = [firstName, 'Johnson', 2037 - 1991, friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years));

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = (friends.push('Jay'));

// console.log(friends);
// console.log(newLength);

// friends.unshift('John');

// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped);

// console.log(friends);
// friends.unshift('Poop');
// console.log(friends);
// friends.shift();
// console.log(friends);

// friends.push(23);
// console.log(friends.indexOf('Michael'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return .15 * bill;
//     } else {
//         return .2 * bill;
//     }
// }

// console.log(calcTip(301));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills);
// console.log(tips);
// console.log(total);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Johnson',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steve']
// }
// console.log(jonas.friends);
// console.log(jonas['job']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between, firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between, firstName, lastName, age, job, and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonas';
// console.log(jonas);

// jonas, 3, Michael

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Johnson',
//     birthYear: 1991,
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steve'],
//     hasDriversLicense: false,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear
//     // }

//     calcAge: function () {
//         this.age = 2040 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return (`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`);
//     }
// }

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.getSummary());
// console.log(jonas['calcAge'](1991));

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = (this.mass / (this.height ** 2));
//         return this.bmi;
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = (this.mass / (this.height ** 2));
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//     console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
// } else {
//     console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`);
// }

// console.log('Lifting weights rep 1');
// console.log('Lifting weights rep 2');
// console.log('Lifting weights rep 3');
// console.log('Lifting weights rep 4');
// console.log('Lifting weights rep 5');
// console.log('Lifting weights rep 6');
// console.log('Lifting weights rep 7');

// for (let rep = 1; rep <= 12; rep++) {
//     console.log(`Lifting weights rep ${rep}`);
// }

// const jonas = ['Jonas', 'Johnson', 2037 - 1991, 'teacher', ['Michael', 'Oeter', 'Steven'], 'yeet'];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);

//     types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages[i] = 2037 - years[i];
// }
// console.log(ages);


// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] == 'number') break;

//     console.log(jonas[i], typeof jonas[i]);

// }

// let age = 17;
// function messaage() {
//     return age >= 21 ? 'Can drink'
//         : age >= 25 ? 'Can poop'
//             : 'none'
// }

// console.log(message);

// const jonas = ['Jonas', 'Johnson', 2037 - 1991, 'teacher', ['Michael', 'Oeter', 'Steven']];

// for (let i = jonas.length; i > 0; i--) {
//     console.log(jonas[i], i);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(` ------- Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 13; rep++) {
//         console.log(`Exercise ${exercise} rep ${rep}`);
//     }
// }

// for (let rep = 1; rep < 13; rep++) {
//     console.log(`rep ${rep}`);
// }


// while (roll != 6) {
//     console.log(`rep ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log(`You rolled a ${dice}`)
//     }
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcAll = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 50 && arr[i] <= 300) {
//             tips.push(.15 * arr[i]);
//             totals.push(arr[i] + tips[i])
//         } else {
//             tips.push(.2 * arr[i]);
//             totals.push(arr[i] + tips[i])
//         }
//     }
// }


// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return (sum / arr.length);
// }


// calcAll(bills);
// console.log(bills);
// console.log(tips);
// console.log(totals);

// console.log(calcAverage(bills));
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));



