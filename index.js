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

countDown(50)
// 
console.log({ finalResult, answer, answer1 });