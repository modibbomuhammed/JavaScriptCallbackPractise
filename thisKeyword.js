// Write a function called sumEvenArguments which takes all of the arguments passed 
// to a function and returns the sum of the even ones.


function sumEvenArguments() {
    const args = [].slice.call(arguments);
    return args.reduce((acc, next) => (next % 2 === 0) ? acc + next : acc, 0);
};

// Write a function called invokeMax which accepts a function and a maximum amount.invokeMax 
// should return a function that when called increments a counter.
// If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

function invokeMax(cbk, maxAmount) {
    let counter = 0;
    return function () {
        counter++
        if (counter > maxAmount) return "Maxed Out"
        return cbk.apply(this, arguments);
    }
};

// Write a function called once which accepts two parameters, a function and a value 
// for the keyword 'this'.Once should return a new function that can only be invoked once, 
// with the value of the keyword this in the function set to be the second parameter.

function once(fn, thisArg) {
    let completed = false;
    return function () {
        if (!completed) {
            completed = true;
            return fn.apply(thisArg, arguments);
        }
    }

};

// Write a function called bind which accepts a function and a value for the keyword this.
// Bind should return a new function that when invoked, will invoke the function passed to bind 
// with the correct value of the keyword this.
// HINT - if you pass more than two parameters to bind, those parameters should be 
// included as parameters to the inner function when it is invoked.
// You will have to make use of closure!

const bind = (fn, thisArg, ...arr) => {
    return function () {
        const args = [].slice.call(arguments);
        // return fn.bind(thisArg, ...arr, ...args)();
        return fn.apply(thisArg, arr.concat(args));
    }
};

// Write a function called flip which accepts a function and a value for 
// the keyword this.Flip should return a new function that when invoked, 
// will invoke the function passed to flip with the correct value of 
// the keyword this and all of the arguments passed to the function REVERSED.
//HINT  - if you pass more than two parameters to flip, 
// those parameters should be included as parameters to the inner function 
// when it is invoked.You will have to make use of closure! 

// Flip should return a new function that when invoked takes the 
// correct number of required arguments to that function which are then reversed.
// HINT - you will need to use the.length property on functions to figure out 
// the correct amount of arguments.For example:

function flip(fn, thisArg) {
    const outerArgs = [].slice.call(arguments, 2);
    return function () {
        const length = fn.length;
        const innerArgs = [].slice.call(arguments);
        const allArgs = outerArgs.concat(innerArgs).slice(0, length).reverse();
        return fn.apply(thisArg, allArgs);
    }
}



module.exports = { sumEvenArguments, invokeMax, once, bind, flip };






















