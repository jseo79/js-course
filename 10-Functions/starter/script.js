'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };
// createBooking('LH123', 5, 10);

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr.' + passenger.name;

//     if (passenger.passport === 24739479284) {
//         alert('Checked in');
//     } else {
//         alert('Wrong passport!');
//     }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//     return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// const greet2 = greeting => name => console.log(`${greeting} ${name}`);

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// // console.log(lufthansa);

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// // const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams');

// console.log(eurowings);

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// };

// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate = 0.14, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// console.log(addTax(undefined, 100));
// console.log(addTax(0.1, 100));

// const addTaxRate = function (rate) {
//     return function (value) {
//         return value + value * rate;
//     };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = Number(
//             prompt(
//                 `${this.question}\n${this.options.join(
//                     '\n'
//                 )}\n(Write option number)`
//             )
//         );
//         this.answers[answer]++;
//         this.displayResults('array');
//         this.displayResults();
//     },
//     displayResults(type = 'string') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//     },
// };
// document
//     .querySelector('.poll')
//     .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] });

// const runOnce = function () {
//     console.log('This will never run again');
// };
// runOnce();

// (function () {
//     console.log('This will never run again');
// })();

// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     };
// };
// const booker = secureBooking();

// booker();
// booker();
// booker();

// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     };
// };

// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     };
// };

// g();
// f();
// h();
// f();

// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(6, 5);

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    header.addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();
