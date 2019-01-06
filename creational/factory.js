/*
==== Creational Patterns =====

## Factory Pattern

Factory Pattern is class-based creational pattern.
It provides a generic interface that delegates the responsibility of object instantiation to its subclasses.

This pattern is used when we need to manage or manipulate collections of objects that are different yet have many similar characteristics.

*/

/* ES6 */

class BallFactory {
    constructor() {
        this.createBall = function(type) {

            let ball;
            if (type === 'football' || type === 'soccer') ball = new Football();
            else if (type === 'basketball') ball = new Basketball();


            ball.roll = function() {
                return `The ${this._type} is rolling.`;
            };

            return ball;
        };
    }
}

class Football {
    constructor() {
        this._type = 'football';
        this.kick = function() {
            return 'You kicked the football.';
        };
    }
}

class Basketball {
    constructor() {
        this._type = 'basketball';
        this.bounce = function() {
            return 'You bounced the basketball.';
        };
    }
}

// creating objects
const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');

console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.

/* ES5  */

var BallFactory = function BallFactory() {

    this.createBall = function (type) {

        var ball = undefined;

        if (type === 'football' || type === 'soccer') ball = new Football();
        else if (type === 'basketball') ball = new Basketball();

        ball.roll = function () {
            return 'The ' + this._type + ' is rolling.';
        };

        return ball;
    };
};

var Football = function Football() {

    this._type = 'football';
    this.kick = function () {
        return 'You kicked the football.';
    };
};

var Basketball = function Basketball() {
        this._type = 'basketball';
        this.bounce = function () {
            return 'You bounced the basketball.';
        };
    }

// creating objects
;

var factory = new BallFactory();

var myFootball = factory.createBall('football');
var myBasketball = factory.createBall('basketball');

console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.




