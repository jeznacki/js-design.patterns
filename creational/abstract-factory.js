/*

An Abstract Factory provide an interface for creating families of related or
dependent objects without specifying their concrete classes.

*/

/* ES5 */
function droidProducer(kind) {
    if (kind === 'battle') return battleDroidFactory;  //abstarct factory is not specifying anything
    return pilotDroidFactory; //abstarct factory is not specifying anything
}

function battleDroidFactory() {
    return new B1();
}

function pilotDroidFactory() {
    return new Rx24();
}

function B1() {}
B1.prototype.info = function() {
    return "B1, Battle Droid";
};

function Rx24() {}
Rx24.prototype.info = function() {
    return "Rx24, Pilot Droid";
};

var battleDroid = droidProducer('battle');
var pilotDroid = droidProducer('pilot');




/* ES6 */
function droidProducer(kind) {
    if (kind === 'battle') return battleDroidFactory;
    return pilotDroidFactory;
}

function battleDroidFactory() {
    return new B1();
}

function pilotDroidFactory() {
    return new Rx24();
}


class B1 {
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 {
    info() {
        return "Rx24, Pilot Droid";
    }
}
