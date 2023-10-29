// 
// Practise
// ForEach

function doubleValues(arr) {
    const newArr = [];
    arr.forEach(val => newArr.push(val * 2));
    return newArr;
}

const onlyEvenValues = (arr) => {
    const newArr = new Array();
    arr.forEach(val => {
        if (val % 2 === 0) newArr.push(val);
    });
    return newArr;
}

function showFirstAndLast(arr) {
    const newArr = [];
    arr.forEach(val => {
        newArr.push(`${val[0]}${val[val.length - 1]}`);
    });
    return newArr;
}

const addKeyAndValue = (arr, key, value) => {
    const newArr = [];
    arr.forEach(val => {
        newArr.push({ ...val, [key]: value });
    });
    return newArr;
}

function vowelCount(str) {
    const newObj = {};
    str.toLowerCase().split('').forEach(val => {
        const vowels = "aeiou";
        if (vowels.includes(val)) {
            if (newObj[val]) {
                newObj[val] += 1;
            } else {
                newObj[val] = 1;
            };
        }
    });
    return newObj;
}

// Practise
// Map

const doubleValuesMap = (arr) => arr.map(val => val * 2);

const valTimesIndex = arr => arr.map((val, index) => val * index);

const extractKey = (arr, key) => arr.map(val => val[key]);

const extractFullName = arr => arr.map(({ first, last }) => `${first} ${last}`);

// Practise
// Filter
// This first one is to check wether the key is in the object and the value is true
// const filterByValue = (arr, key) => arr.filter(val => key in val && val[key]);
const filterByValue = (arr, key) => arr.filter(val => key in val);

const find = (arr, value) => arr.filter(val => val === value)[0];

const findInObj = (arr, key, value) => arr.filter(val => val[key] === value)[0];

const removeVowels = (str) => {
    const vowels = "aeiou"
    return str.toLowerCase().split('').filter(val => !vowels.includes(val)).join('');
}

function doubleOddNumbers(arr) {
    return arr.filter(val => val % 2 !== 0).map(val => val * 2);
}

const hasOddNumber = arr => arr.some(val => val % 2 !== 0);

const hasAZero = num => num.toString().split('').some(val => Number(val) === 0);

const hasOnlyOddNumbers = arr => arr.every(val => val % 2 !== 0);

// This also works
// const hasNoDuplicates = arr => arr.sort().every((val, index, arr) => val !== arr[index - 1]);

const hasNoDuplicates = arr => arr.every((val, index, arr) => arr.indexOf(val) === arr.lastIndexOf(val));

function hasCertainKey(arr, key) {
    return arr.every(function (val) {
        return key in val;
    });
}

const hasCertainValue = (arr, key, value) => arr.every(val => val[key] === value);

module.exports = {
    doubleValues,
    onlyEvenValues,
    showFirstAndLast,
    addKeyAndValue,
    vowelCount,
    doubleValuesMap,
    valTimesIndex,
    extractKey,
    extractFullName,
    filterByValue,
    find,
    findInObj,
    removeVowels,
    doubleOddNumbers,
    hasOddNumber,
    hasAZero,
    hasOnlyOddNumbers,
    hasNoDuplicates,
    hasCertainKey,
    hasCertainValue
}





































