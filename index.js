const forEach = require("./forEach");
const findIndex = require("./findIndex");
const countDown = require('./countdownTimer');
const { doubleValuesMap, doubleValues, doubleOddNumbers, find, findInObj, filterByValue, extractKey, valTimesIndex, extractFullName, onlyEvenValues, showFirstAndLast, addKeyAndValue, vowelCount, removeVowels } = require("./practise");

// For Each Example
let finalResult = "";
forEach(['My', "forEach", "Example"], (element, index, arr) => {
    if (arr.length - 1 !== index) {
        finalResult += `${element} `;
    } else {
        finalResult += `${element}!!!`
    }
});

const answer = findIndex([3, 4, 6, 2, 1], (num, index, arr) => num === 1);
const answer1 = findIndex([5, 11, 13, 8, 6, 7], num => num % 2 === 0);

// countDown(5);

// PROMISE EXAMPLE
// const p1 = new Promise((resolve, reject) => {
//     console.log('look at me');
//     resolve([1, 2, 3, 4, 5]);
// });


// p1.then((result) => console.log({ result }));

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(Math.floor(Math.random() * 10));
//     }, 500)
// })


// promise.then((data) => {
//     console.log({ data })

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(Math.floor(Math.random() * 10));
//         }, 3000);
//     })
// }).then(data2 => console.log({ data2 }))

// 
// console.log({ onlyEvenValues: onlyEvenValues([5, 1, 2, 3, 10]) });
console.log({ showFirstAndLast: showFirstAndLast(['colt', 'matt', 'tim', 'udemy']) });
console.log({ addKeyAndValue: addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor') })
console.log({ vowelCount: vowelCount('I Am awesome and so are you') })
console.log({ double: doubleValuesMap([1, 2, 3, 4, 5]) })
console.log({ one: valTimesIndex([1, 2, 3]), two: valTimesIndex([1, -2, -3]) })
console.log({ extractKey: extractKey([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'name') });
console.log({ extractFullName: extractFullName([{ first: 'Elie', last: "Schoppik" }, { first: 'Tim', last: "Garcia" }, { first: 'Matt', last: "Lane" }, { first: 'Colt', last: "Steele" }]) })
console.log({ filterByValue: filterByValue([{ first: 'Elie', last: "Schoppik" }, { first: 'Tim', last: "Garcia", isCatOwner: true }, { first: 'Matt', last: "Lane" }, { first: 'Colt', last: "Steele", isCatOwner: true }, { name: "Modibbo M.A", isCatOwner: false }], 'isCatOwner') })
console.log({ find: find([1, 2, 3, 4, 5], 3), find1: find([1, 2, 3, 4, 5], 10) })
console.log({ findInObj: findInObj([{ first: 'Elie', last: "Schoppik" }, { first: 'Tim', last: "Garcia", isCatOwner: true }, { first: 'Matt', last: "Lane" }, { first: 'Colt', last: "Steele", isCatOwner: true }], 'isCatOwner', true) })
console.log({ one: removeVowels('Elie'), two: removeVowels('TIM'), three: removeVowels('ZZZZZZ') })
console.log({ one: doubleOddNumbers([1, 2, 3, 4, 5]), two: doubleOddNumbers([4, 4, 4, 4, 4]) })




















