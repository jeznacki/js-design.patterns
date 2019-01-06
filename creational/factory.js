/*

Factory  define an interface for creating a single object, but let subclasses decide which class to instantiate.
Factory  lets a class defer instantiation to subclasses.

*/

/* ES6 */

class BmwFactory {

    create(type) {
        if (type === 'X5')
            return new Bmw(type, 108000, 300); //factory method define what to run before return
        if (type === 'X6')
            return new Bmw(type, 111000, 320);  //factory method define what to run before return
    }
}

class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

const factory = new BmwFactory();

const bmwX5 = factory.create('X5');
const bmwX6 = factory.create('X6');

console.log(bmwX6.model); //X6
console.log(bmwX5.model); //X5


/* ES5  */

function bmwFactory(type) {
    if (type === 'X5')
        return new Bmw(type, 108000, 300);
    if (type === 'X6')
        return new Bmw(type, 111000, 320);
}

function Bmw(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
}

var factory = new BmwFactory();

var bmwX5 = factory.create('X5');
var bmwX6 = factory.create('X6');

console.log(bmwX6.model); //X6
console.log(bmwX5.model); //X5





