/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Bob'
console.log(firstName);

let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let country = "USA";
let contintent = 'NA';
let population = "33";

console.log(country);
console.log(contintent);
console.log(population);


let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = 'YES!';

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

let year;
console.log(year);

console.log(typeof null);


const country = "USA";
let population = 33;
const isIsland = false;
const language = "English";
const continent = "North America";
console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);


let age = 30;
age = 31;

const birthYear = 1991;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2004;



const firstName = 'Jonas';
const lastName = 'Bob';

console.log(population / 2);
population++;
console.log(population);
let finlandPopulaiton = 6;
console.log(population > finlandPopulaiton);

avgPopulation = 33;
console.log(population > avgPopulation);

let description = country + " is in " + continent + " , and its " + population + " million people speak " + language + ".";

console.log(description);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2019;
console.log(now - 1991 > now - 2018);
let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas, ageSarah);
console.log(averageAge);


let markHeight1 = 1.69;
let markWeight1 = 78;
let johnHeight1 = 1.95;
let johnWeight1 = 92;

let markHeight2 = 1.88;
let markWeight2 = 95;
let johnHeight2 = 1.76;
let johnWeight2 = 85;

let markBMI1 = markWeight1 / (markHeight1 ** 2);
let johnBMI1 = johnWeight1 / (johnHeight1 ** 2);

let markBMI2 = markWeight2 / (markHeight2 ** 2);
let johnBMI2 = johnWeight2 / (johnHeight2 ** 2);

console.log(markBMI1, markBMI2, johnBMI1, johnBMI2);

let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markHigherBMI1, markHigherBMI2);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`asd
addEventListener
as
`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🤗')
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah cannot start driving license. Wait for ${yearsLeft} years`)
}

const birthYear = 2000;
let century;
if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


let markHeight1 = 1.69;
let markWeight1 = 78;
let johnHeight1 = 1.95;
let johnWeight1 = 92;

let markBMI1 = markWeight1 / (markHeight1 ** 2);
let johnBMI1 = johnWeight1 / (johnHeight1 ** 2);

let markHigherBMI1 = markBMI1 > johnBMI1;

if (markHigherBMI1) {
    console.log(`Mark's BMI ${(markBMI1)} is higher than John's ${(johnBMI1)}`);
} else {
    console.log(`John's BMI ${(johnBMI1)} is higher than Mark's ${(markBMI1)}`);
}


//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old')

//same as
console.log('I am ' + '23' + ' years old')

console.log('23' - '10' - 3);
console.log('23' * '2');


console.log(Boolean(0));

const money = 100;

if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;


const age = 18;

if (age === 18) console.log('You just became an adult!')

const favorite = Number(prompt("What's your favorite number?"));

console.log(favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if (favorite !== 23) console.log('Why not 23?');


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}


// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// const dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// const minScore = 100;

// if ((dolphinsAvg === koalasAvg) && (dolphinsAvg >= minScore)) {
//     console.log("draw!");
// } else if ((dolphinsAvg > koalasAvg) && (dolphinsAvg >= minScore)) {
//     console.log("Dolphins win!");
// } else if ((koalasAvg > dolphinsAvg) && (koalasAvg >= minScore)) {
//     console.log("Koalas win!");
// } else {
//     console.log("Nothing");
// }

// const dolphins2Score1 = 97;
// const dolphins2Score2 = 112;
// const dolphins2Score3 = 101;

// const koalas2Score1 = 109;
// const koalas2Score2 = 95;
// const koalas2Score3 = 123;

// const dolphinsAvg2 = (dolphins2Score1 + dolphins2Score2 + dolphins2Score3) / 3;
// const koalasAvg2 = (koalas2Score1 + koalas2Score2 + koalas2Score3) / 3;

// const minScore2 = 100;

// if ((dolphinsAvg2 === koalasAvg2) && (dolphinsAvg2 >= minScore2)) {
//     console.log("draw!");
// } else if ((dolphinsAvg2 > koalasAvg2) && (dolphinsAvg2 >= minScore2)) {
//     console.log("Dolphins win!");
// } else if ((koalasAvg2 > dolphinsAvg2) && (koalasAvg2 >= minScore2)) {
//     console.log("Koalas win!");
// } else {
//     console.log("Nothing");
// }


// const dolphins3Score1 = 101;
// const dolphins3Score2 = 100;
// const dolphins3Score3 = 100;

// const koalas3Score1 = 101;
// const koalas3Score2 = 100;
// const koalas3Score3 = 100;

// const dolphinsAvg3 = (dolphins3Score1 + dolphins3Score2 + dolphins3Score3) / 3;
// const koalasAvg3 = (koalas3Score1 + koalas3Score2 + koalas3Score3) / 3;

// const minScore3 = 100;

// if ((dolphinsAvg3 === koalasAvg3) && (dolphinsAvg3 >= minScore3)) {
//     console.log("draw!");
// } else if ((dolphinsAvg3 > koalasAvg3) && (dolphinsAvg3 >= minScore3)) {
//     console.log("Dolphins win!");
// } else if ((koalasAvg3 > dolphinsAvg3) && (koalasAvg3 >= minScore3)) {
//     console.log("Koalas win!");
// } else {
//     console.log("Nothing");
// }


const day = 'tuesday';

switch (day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}


if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}


const age = 14;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


const bill = 430;
const tip = (bill >= 300 || bill <= 50) ? bill * .2 : bill * .15;

console.log(`The bill was ${bill}, the tip ${tip}, and the total value ${bill + tip}`);
//test
*/
