
// traditional Function-based syntax
function Hero(name, specialAbility) {
    // setting property values
    this.name = name;
    this.specialAbility = specialAbility;

    // declaring a method on the object
    this.getDetails = function() {
        return this.name + ' can ' + this.specialAbility;
    };
}

// ES6 Class syntax
class Hero {
    constructor(name, specialAbility) {
        // setting property values
        this._name = name;
        this._specialAbility = specialAbility;

        // declaring a method on the object
        this.getDetails = function() {
            return `${this._name} can ${this._specialAbility}`;
        };
    }
}

// creating new instances of Hero
const IronMan = new Hero('Iron Man', 'fly');

console.log(IronMan.getDetails()); // Iron Man can fly