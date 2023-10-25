const forEach = require("./forEach");

// For Each Example
let finalResult = "";
forEach(['My', "forEach", "Example"], (element, index, arr) => {
    if (arr.length - 1 !== index) {
        finalResult += `${element} `;
    } else {
        finalResult += `${element}!!!`
    }
});

console.log({ finalResult });