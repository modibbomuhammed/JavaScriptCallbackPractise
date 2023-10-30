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
        return cbk.apply(null, arguments);
    }
};

module.exports = { sumEvenArguments };






















