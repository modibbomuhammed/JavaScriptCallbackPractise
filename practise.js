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

module.exports = {
    doubleValues,
    onlyEvenValues,
    showFirstAndLast,
    addKeyAndValue,
    vowelCount,
    doubleValuesMap,
    valTimesIndex,
    extractKey,
    extractFullName
}













