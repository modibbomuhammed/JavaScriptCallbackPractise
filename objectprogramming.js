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
    this.family = [];
}

Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.addToFamily = function (person) {
    if (person instanceof Person) return this.family.push(person);
}

function Child() {
    // function Child(firstName, lastName, favoriteColor, favoriteFood) {
    Parent.apply(this, arguments);
}

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.start = function () {
    return `VROOM!`;
}

Vehicle.prototype.toString = function () {
    return `The make,model and year are ${this.make},${this.model},${this.year}`;
}

Vehicle.prototype.turnOn = function () {
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function () {
    this.isRunning = false;
}

Vehicle.prototype.honk = function () {
    return this.isRunning ? "beep" : undefined;
}
// Child.

function Car(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motocycle(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels = 2;
}

Motocycle.prototype = Object.create(Vehicle.prototype);
Motocycle.prototype.constructor = Motocycle;

module.exports = { Person, Parent, Child, Vehicle }









