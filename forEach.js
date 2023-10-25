function forEach(arr, callback){
    for(element of arr){
        callback(element, arr.indexOf(element),arr);
    }; 
}


module.exports = forEach;