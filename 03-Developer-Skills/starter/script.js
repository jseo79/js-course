// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//example of using function within function
// const grades = ['A', 'B', 'C', 'A', 'A'];

// const convertToNum = function (arr) {
// 	const numArr = [];
// 	for (let i = 0; i < grades.length; i++) {
// 		switch (arr[i]) {
// 			case 'A':
// 				numArr[i] = 4.0;
// 				break;
// 			case 'B':
// 				numArr[i] = 3.0;
// 				break;
// 			case 'C':
// 				numArr[i] = 2.0;
// 				break;
// 		}
// 	}
// 	return numArr;
// };

// const gpa = function (arr) {
// 	const numArr = convertToNum(arr);
// 	let sum = 0;
// 	for (let i = 0; i < numArr.length; i++) {
// 		sum += numArr[i];
// 	}
// 	return sum / numArr.length;
// };

// console.log(gpa(grades));

// const measureKelvin = function () {
// 	const measurement = {
// 		type: 'temp',
// 		unit: 'celsius',
// 		value: prompt('Degrees celsius:'),
// 	};

// 	const kelvin = Number(measurement.value) + 273;
// 	return kelvin;
// };

// console.log(measureKelvin());

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
// 	let result = '... ';
// 	for (let i = 0; i < arr.length; i++) {
// 		result += `${arr[i]}C in ${i + 1} days ...`;
// 	}
// 	return result;
// };

// console.log(printForecast(data1));
// console.log(printForecast(data2));
