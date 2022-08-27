'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = ' ';

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}  deposit</div>
            <div class="movements__value">${mov}€</div>
        </div>`;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);

    labelBalance.innerHTML = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.innerHTML = `${incomes}€`;

    const out = Math.abs(
        acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
    );
    labelSumOut.innerHTML = `${out}€`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter(ele => ele >= 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.innerHTML = `${interest}€`;
};

const updateUI = function (acc) {
    calcDisplaySummary(acc);
    calcDisplayBalance(acc);
    displayMovements(acc.movements);
    containerApp.style.opacity = 100;
};

const createUsername = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUsername(accounts);

let currentAccount = account1;
updateUI(currentAccount);

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(' ')[0]
        }`;
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const ReceiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    console.log(amount, ReceiverAcc);
    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        ReceiverAcc &&
        amount > 0 &&
        amount <= currentAccount.balance &&
        currentAccount.username !== ReceiverAcc?.username
    ) {
        currentAccount.movements.push(-amount);
        ReceiverAcc.movements.push(amount);
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (
        amount > 0 &&
        currentAccount.movements.some(mov => mov >= amount * 0.1)
    ) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (
        currentAccount.username === inputCloseUsername.value &&
        currentAccount.pin === Number(inputClosePin.value)
    ) {
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
        );
        accounts.splice(index, 1);
        containerApp.style.opacity = 0;
        inputCloseUsername.value = inputClosePin.value = '';
    }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GDP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
// });
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[1]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//     if (movement > 0) {
//         console.log(`You deposited ${movement}`);
//     } else {
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// }

// movements.forEach(function (movement) {
//     if (movement > 0) {
//         console.log(`You deposited ${movement}`);
//     } else {
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// });

// const checkDogs = function (dogsJulia, dogsKate) {
//     const dogsJuliaCopy = [...dogsJulia];
//     dogsJuliaCopy.splice(0, 1);
//     dogsJuliaCopy.splice(-2, 2);
//     console.log(dogsJuliaCopy);

//     const correctArrs = [dogsJuliaCopy, dogsKate];

//     for (const arr of correctArrs) {
//         for (const [i, dog] of arr.entries()) {
//             const adultOrNot = dog >= 3 ? 'adult' : 'puppy';
//             const aOrAn = adultOrNot === 'adult' ? 'an' : 'a';

//             console.log(
//                 `Dog number ${
//                     i + 1
//                 } is ${aOrAn} ${adultOrNot}, and is ${dog} years old`
//             );
//         }
//     }
// };

//TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//     return mov * eurToUsd;
// });
// console.log(movementsUSD);

// const movementsUSD2 = movements.map(mov => mov * eurToUsd);

// console.log(movements, movementsUSD);

// const user = 'Steven Thomas Williams'; //stw

// const deposits = account1.movements.filter(function (mov) {});

// const withdrawals = account1.movements.filter(function (mov) {
//     return mov < 0;
// });
// console.log(account1);
// console.log(withdrawals);

// console.log(account1.movements);

// const balance = account1.movements.reduce(function (acc, curr, i, arr) {
//     return acc + curr;
// }, 0);

// const balance2 = account1.movements.reduce((acc, curr) => acc + curr, 0);

// const max = account1.movements.reduce((acc, mov) => {
//     if (acc > mov) {
//         return acc;
//     } else {
//         return mov;
//     }
// }, account1.movements[0]);
// console.log(max);

// const test1 = [5, 2, 4, 1, 15, 8, 3];
// const test2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (arr) {
//     const humanAgeArr = arr.map(function (dog) {
//         if (dog <= 2) {
//             return dog * 2;
//         } else {
//             return 16 + dog * 4;
//         }
//     });
//     const adultsArr = humanAgeArr.filter(function (dog) {
//         return dog >= 18;
//     });
//     const average = adultsArr.reduce(function (acc, curr, i, arr) {
//         return acc + curr / arr.length;
//     }, 0);
//     return average;
// };

// const calcAverageHumanAge2 = function (arr) {
//     const avg = arr
//         .map(dog => (dog <= 2 ? dog * 2 : 16 + dog * 4))
//         .filter(dog => dog >= 18)
//         .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
//     return avg;
// };

// console.log(calcAverageHumanAge2(test1));
// console.log(calcAverageHumanAge2(test2));

// const eurToUsd = 1.1;
// const totalDepositsUSD = account1.movements
//     .filter(mov => mov > 0)
//     .map(mov => mov * eurToUsd)
//     .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// const firstWithdrawal = account1.movements.find(mov => mov < 0);
// console.log(account1.movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// const account22 = function (accounts) {
//     for (const account of accounts) {
//         if (account.owner === 'Jessica Davis') {
//             return account;
//         }
//     }
// };
// console.log(account22(accounts));

// const anyDeposites = account1.movements.some(mov => mov > 0);
// console.log(anyDeposites);

// console.log(account1.movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// const deposit = move => mov > 0;

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
// const arrDeep = [[1, [2, [3]]], [4, 5, 6], 7, 8];
// console.log(arrDeep.flat(3));

// const accountMovements = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((acc, curr) => acc + curr, 0);
// console.log(accountMovements);

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// console.log(account1.movements);
// console.log(account1.movements.sort());

// console.log(account1.movements.sort((a, b) => a - b));

// console.log(new Array(1, 5, 7, 9));
// const x = new Array(1);
// x.push(5);
// console.log(x);

// const arr = Array.from({ length: 7 }, () => 1);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const c = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6) + 1);
// console.log(c);

// labelBalance.addEventListener('click', function () {
//     const movementsUI = Array.from(
//         document.querySelectorAll('.movements__value'),
//         el => Number(el.textContent.replace('€', ''))
//     );
//     console.log(movementsUI);
// });

// const bankDepositSum = accounts
//     .flatMap(acc => acc.movements)
//     .filter(mov => mov > 0)
//     .reduce((sum, curr) => sum + curr,0);
// console.log(bankDepositSum);

// const numDeposits1000 = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);

// console.log(numDeposits1000);

const { deposits, withdrawals } = accounts
    .flatMap(acc => acc.movements)
    .reduce(
        (sums, curr) => {
            curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
            return sums;
        },
        {
            deposits: 0,
            withdrawals: 0,
        }
    );
console.log(deposits, withdrawals);
