function add(a = 2, b = 3) {
    return a + b;
}

const smallestValue = (...args) => Math.min(...args);

const placeInMiddle = (arr1, arr2) => {
    const index = arr1.length <= 1 ? 0 : arr1.length / 2;
    const beginning = arr1.slice(0, index);
    const end = arr1.slice(index);
    return [...beginning, ...arr2, ...end];
}

const joinArrays = (...arrays) => arrays.reduce((acc, next) => acc.concat(next));

const sumEvenArgs = (...args) => args.reduce((acc, next) => (next % 2 === 0) ? acc + next : acc, 0);

const flip = function (func, thisArg, ...outer) {
    return function (...inner) {
        return func.apply(thisArg, [...outer, ...inner].reverse());
    }
}

const bind = (func, thisArg, ...outer) => {
    return (...inner) => {
        return func.apply(thisArg, [...outer, ...inner]);
    }
};

// Destructuring

const displayStudentInfo = ({ first, last }) => `Your FullName is ${first} ${last}`;

const createStudent = ({ likesES2015 = true, likesJavaScript = true } = {}) => {
    if (likesES2015 && likesJavaScript) return `The student likes Javascript and ES2015`;
    if (!likesES2015) return `The student likes Javascript`;
    if (!likesJavaScript) return `The student likes ES2015`;
    if (!likesES2015 && !likesJavaScript) return `The student does not like much...`;
};

const reverseArray = (arr) => {
    for (let x = 0; x < arr.length / 2; x++) {
        [arr[arr.length - 1 - x], arr[x]] = [arr[x], arr[arr.length - 1 - x]];
    }
    return arr;
}

///////////////////////////////////////////////////////////////////////////////////////////
class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
    }
    multiplyFavoriteNumber(num) {
        return num * this.favoriteNumber;
    }
}

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        return `VROOM!`;
    }
    toString() {
        return `The make,model and year are ${this.make},${this.model} ${this.year}`;
    }
}

// Create a class for a Car.Each object created from the Car function should also have a make, model, and year 
// and a property called numWheels which should be 
// 4. The Car prototype should inherit all of the methods from the Vehicle prototype
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheel = 4;
    }
}

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year 
// and a property called numWheels which should be 2. 
// The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheel = 2;
    }
}

class MessageBoard {
    constructor() {
        this.messages = new Map;
        this.id = 1;
    }
    addMessage(str) {
        this.messages.set(this.id, str);
        this.id++;
        return this;
    }
    findMessageById(id) {
        return this.messages.get(id);
    }
    findMessageByValue(value) {
        for (let [key, messageValue] of this.messages.entries()) {
            if (value === messageValue) return messageValue;
        }
        return;
    }
    removeMessage(num) {
        this.messages.delete(num);
        return this;
    }
    numberOfMessages() {
        return this.messages.size;
    }
    messagesToArray() {
        const messagesArray = [];
        this.messages.forEach(val => messagesArray.push(val));
        return messagesArray;
        // return Array.from(this.messages.values());
    }
}

///////////////////////////////////////////////////////////////
// sets
//////////////////////////////////////////////////////////////
const uniqueValues = arr => new Set(arr).size;

const hasDuplicates = arr => arr.length !== new Set(arr).size;

//Write a function called countPairs which accepts an array of numbers and a number.
//The function should return the number of unique pairs(two numbers) that sum up to the number passed to the function.

const countPairs = (arr, num) => {
    let count = 0;
    const cache = new Set(arr);
    for (let val of cache.values()) {
        cache.delete(val);
        if (cache.has(num - val)) {
            count++;
        }
    }
    return count;
}

//////////////////////////////////////////////////////////////
//                         Promises
/////////////////////////////////////////////////////////////
// ES2015 Promises Assignment
// 1. Write a function called getMostFollowers, which accepts a variable number of arguments.
// You should then make an AJAX call to the Github User 
// API(https://developer.github.com/v3/users/#get-a-single-user) to get the name and number of followers of each argument. 
// The function should return a promise, which when resolved, returns a string which displays the username who has the most followers. 

    // Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods($.getJSON, $.ajax, etc.) return a promise.

    async function getMostFollowers(...usernames){
        const usersData = [];
        const api = `https://api.github.com/users/`
        return await Promise.all(usernames.map(val => {
            return fetch(`${api}${val}`)
                    .then(res => res.json())
                    .then(data => {
                        usersData.push(data);
                    })
        })).then(data => {
            console.log({data})
            const max = Math.max(...usersData.map(({followers}) => Number(followers)));
            const userWithMostFollowers = usersData.find(user => user.followers === max);
            console.log(`The user with the most users is ${userWithMostFollowers.name} with ${max} Users`)
        })
    }     
//"Colt has the most followers with 424"

 // 2. Write a function called starWarsString, which accepts a number.
 // You should then make an AJAX call to the Star Wars API(https://swapi.co/ ) to search 
 // for a specific character by 
 // the number passed to the function. 
 // Your function should return a promise that when resolved will console.log 
 //the name of the character.

function starWarsString(num){
    
} 
 
//"Luke Skywalker"
// Bonus 1 - Using the data from the previous AJAX call above, make another AJAX request to get the 
// first film that character is featured in and return a promise that when resolved will console.log 
// the name of the character and the film they are featured in


 // "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"
// Bonus 2 - Using the data from Bonus 1 - make another AJAX call to get the information about the 
// first planet that the film contains.
// Your function should return a promise that when resolved will console.log the name of the character and 
// the film they are featured in and the name of the planet.

    

// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth"








































































