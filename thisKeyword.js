// Write a function called sumEvenArguments which takes all of the arguments passed 
// to a function and returns the sum of the even ones.


function sumEvenArguments() {
    const args = [].slice.call(arguments);
    return args.reduce((acc, next) => (next % 2 === 0) ? acc + next : acc, 0);
};


module.exports = { sumEvenArguments };
