'use strict';

// Data needed for a later exercise
const weekdays = ['poop'];
const hours = {
    [weekdays[0]]: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    hours,

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time,
        address,
    }) {},

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`
        );
    },
};

// for (const [day, { open, close }] of Object.entries(hours)) {
//     console.log(`On ${day} we are open at ${open} and close at ${close}`);
// }

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
});

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const {
//     fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const ingredients = [
//     prompt("Let's make pasta! Ingredient 1?"),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const newRestaurant = { ...restaurant, poop: 'lala' };
// console.log(newRestaurant);

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum);
// };
// add(2, 3);
// add(2, 3, 4, 5);

// const x = [23, 5, 7];
// add(...x);

// console.log(0 || 2);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// const rest1 = {
//     name: 'Capri',
//     numGuests: 20,
// };

// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Joestar',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests ?? 10;
// rest2.numGuests ||= 10;
// rest2.numGuests ??= 10;

// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest1);
// console.log(rest2);

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// for (const [goal, player] of game.scored.entries()) {
//     console.log(`Goal ${goal + 1}: ${player}`);
// }

// const calculateAvg = function () {
//     let avg = 0;
//     for (const odd of Object.values(game.odds)) {
//         avg += odd;
//     }
//     avg /= Object.values(game.odds).length;
//     console.log(avg);
// };

// calculateAvg();

// for (const [key, value] of Object.entries(game.odds)) {
//     const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
//     console.log(`Odd of ${teamStr}: ${value}`);
// }

// const scorers = {};
// for (const player of game.scored) {
//     if (scorers[player]) {
//         scorers[player] += 1;
//     } else {
//         scorers[player] = 1;
//     }
// }
// console.log(scorers);

// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const { team1: team1, x: draw, team2: team2 } = game.odds;

// const printGoals = function (...names) {
//     for (let i = 0; i < names.length; i++) {
//         console.log(`${names[i]}`);
//     }
//     console.log(`Goal scored = ${names.length}`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log(`Team2 is more likely to win`);
// team1 > team2 && console.log(`Team1 is more likely to win`);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [i, el] of menu.entries()) console.log(`${i}: ${el}`);

// console.log(restaurant.hours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//     const open = restaurant.hours[day]?.open ?? 'closed';
// console.log(`On day ${day} we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// const properties = Object.keys(hours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//     openStr += `${day}, `;
// }
// console.log(openStr);

// const values = Object.values(hours);
// console.log(values);

// console.log(Object.keys(hours));
// console.log(Object.values(hours));
// console.log(Object.entries(hours));

// const ordersSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza',
// ]);
// console.log(ordersSet);

// const ordersArray = [...ordersSet];
// console.log(ordersArray);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');

// const question = new Map([
//     ['question', 'What is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct'],
//     [false, 'Try again!'],
// ]);

// console.log(question);

// const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);
// console.log(hours);

// for (const [key, value] of question) {
//     if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt(`Your answer`));
// console.log(answer);

// console.log(question.get(answer === question.get('correct')));

// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(
//     `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// for (const [key, value] of gameEvents) {
//     if (key <= 45) {
//         console.log(`[FIRST HALF] ${key}: ${value}`);
//     } else {
//         console.log(`[SECOND HALF] ${key}: ${value}`);
//     }
// }

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('P'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     if (s === 'E' || s === 'B') {
//         console.log(`Middle Seat`);
//     } else {
//         console.log(`Not middle Seat`);
//     }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const announcement = 'ALl door , door , door ahhahha';
// console.log(announcement.replaceAll('door', 'gate'));

// const capitalizeNames = function (name) {
//     const names = name.split(' ');
//     const namesUpper = [];

//     for (const n of names) {
//         namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     }
//     console.log(namesUpper.join(' '));
// };

// capitalizeNames('jessica ann smith davis');

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));

// const maskCreditCard = function (number) {
//     const str = String(number);
//     const last = str.slice(-4);
//     console.log(last.padStart(str.length, '*'));
// };

// maskCreditCard(12341234124124);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

/*
underscore_case
  first_name
Some_Variable
  calculate_AGE
delayed_departure
*/

// document.querySelector('button').addEventListener('click', function () {
//     const text = document.querySelector('textarea').value;
//     const textArr = text.split('\n');
//     for (const row of textArr) {
//         const [first, second] = row.trim().toLowerCase().split('_');
//         let output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
//         console.log(output);
//         console.log(`${output.padEnd(20)} POO`);
//     }
// });

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsArr = flights.split('+');
for (const flight of flightsArr) {
    let newFlight = flight.replaceAll('_', ' ');
    newFlight = newFlight.replaceAll(';', ' ');
    console.log(newFlight);
}
