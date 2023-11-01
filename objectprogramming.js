// PART 1

// Create a constructor function for a Person, each person should 
// have a firstName, lastName, favoriteColor and favoriteNumber. 
// Your function MUST be named Person.

// Write a method called multiplyFavoriteNumber that takes in a number and returns 
// the product of the number and the object created from the Person functions' favorite number.

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.multiplyFavoriteNumber = function (num) {
        return num * this.favoriteNumber;
    }
}

function Parent(firstName, lastName, favoriteColor, favoriteFood) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child() {
    Parent.apply(this, arguments);
}

module.exports = { Person, Parent, Child }









