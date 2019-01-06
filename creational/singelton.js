/*

Singleton is a  creational design pattern where only one instance of a class can exist.
If no instance of the singleton class exists then a new instance is created and returned
but if an instance already exists then the reference to the existing instance is returned.

*/


// The following piece of code is a JavaScript developer's daily usage of the Singleton.
var singelton = {
    publicVariable: 'Public Variable',
    publicMethod : function () {
        console.log('Public Method');
    }
};

/* ES5 */

var Singleton = (function () {

    // Instance stores a reference to the Singleton
    var instance;

    function init() {

        // Private methods and variables
        return {

            // Public methods and variables
            publicMethod() {
                console.log('Public Method');
            },

            publicVariable: 'Public Variable'
        };

    };

    return {

        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {

            if ( !instance ) {
                instance = init();
            }

            return instance;
        }

    };

})();

var singleA = Singleton.getInstance();
var singleB = Singleton.getInstance();
console.log( singleA === singleB); // true


/* ES6 */

class Singleton {

    constructor() {

        this.publicVariable = 'Public Variable';

        if(! Singleton.instance){
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    publicMethod() {
        console.log('Public Method');
    }
}

const instance = new Singleton();

// prevents new properties from being added to the object
Object.freeze(instance);


var singleA = new Singleton();
var singleB = new Singleton();
console.log( singleA === singleB); // true