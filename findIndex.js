module.exports = function (arr, callback) {
    for (let element = 0; element < arr.length; element++) {
        if (callback(arr[element], element, arr)) return element;
    }
    return -1;
}

