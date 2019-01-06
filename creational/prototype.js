/*

Protoype Pattern is an object-based creational design pattern.
In this, we use a sort of a “skeleton” of an existing object to create or instantiate new objects.

This pattern is specifically important and beneficial to JavaScript because it utilizes prototypal inheritance
instead of a classic object-oriented inheritance.

*/


const car = {
    noOfWheels: 4,
    start() {
        return 'started';
    },
    stop() {
        return 'stopped';
    },
};

// Object.create(proto[, propertiesObject])

const myCar = Object.create(car, { owner: { value: 'John' } });

console.log(myCar.__proto__ === car); // true