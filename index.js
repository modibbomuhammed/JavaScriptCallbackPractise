const forEach = require("./forEach");
const findIndex = require("./findIndex");
const countDown = require('./countdownTimer');
const { doubleValuesMap, doubleValues, hasAZero, partition, anotherVowelCount, addKeyAndValueReduce, hasOddNumber, hasCertainKey, doubleOddNumbers, hasNoDuplicates, hasOnlyOddNumbers, find, findInObj, filterByValue, extractKey, valTimesIndex, extractFullName, onlyEvenValues, showFirstAndLast, addKeyAndValue, vowelCount, removeVowels } = require("./practise");
const { specialMultiply, guessingGame } = require('./closure');
const { sumEvenArguments } = require('./thisKeyword');

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
console.log({ oddOne: hasOddNumber([1, 2, 2, 2, 2, 2, 4]), oddTwo: hasOddNumber([2, 2, 2, 2, 2, 4]) })
console.log({ one: hasAZero(3332123213101232321), two: hasAZero(1212121) })
console.log({ onlyOddNumberOne: hasOnlyOddNumbers([1, 3, 5, 7]), hasOnlyOddNumbersTwo: hasOnlyOddNumbers([1, 2, 3, 5, 7]) })
console.log({ duplicates: hasNoDuplicates([1, 2, 3, 1]) })
console.log({ duplicatestwo: hasNoDuplicates([1, 2, 3]) })
console.log({
    hasCertainKey: hasCertainKey([
        { title: "Instructor", first: 'Elie', last: "Schoppik" },
        { title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true },
        { title: "Instructor", first: 'Matt', last: "Lane" },
        { title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true }
    ], 'isCatOwner')
})
console.log(anotherVowelCount('Elie'))
console.log(anotherVowelCount('Tim'))
console.log(anotherVowelCount('Matt'))
console.log(anotherVowelCount('hmm'))
console.log(anotherVowelCount('I Am awesome and so are you'))
console.log(addKeyAndValueReduce([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], "title", "instructor"))

function isEven(val) {
    return val % 2 === 0;
}

var arr11 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log({ partition1: partition(arr11, isEven) })

function isLongerThanThreeCharacters(val) {
    return val.length > 3;
}

var names = ['Elie', 'Colt', 'Tim', 'Matt'];

console.log({ partition2: partition(names, isLongerThanThreeCharacters) })

const test = specialMultiply(10);
const test2 = specialMultiply(10, 5);

console.log({ test, test2, test3: test(2) })

console.log(sumEvenArguments(1, 2, 3, 4)) // 6
console.log(sumEvenArguments(1, 2, 6)) // 8
console.log(sumEvenArguments(1, 2)) // 2



























