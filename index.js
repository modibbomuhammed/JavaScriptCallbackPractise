const forEach = require("./forEach");
const findIndex = require("./findIndex");
const countDown = require('./countdownTimer');

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

countDown(5);

// PROMISE EXAMPLE
const p1 = new Promise((resolve, reject) => {
    console.log('look at me');
    resolve([1, 2, 3, 4, 5]);
});


p1.then((result) => console.log({ result }));

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.floor(Math.random() * 10));
    }, 500)
})


promise.then((data) => {
    console.log({ data })

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 10));
        }, 3000);
    })
}).then(data2 => console.log({ data2 }))
// 
console.log({ finalResult, answer, answer1 });




















