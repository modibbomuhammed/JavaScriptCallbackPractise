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





















































