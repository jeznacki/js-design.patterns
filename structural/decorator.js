/*

Decorator pattern - The decorator pattern (also known as Wrapper, an alternative naming shared with the Adapter pattern) is a design pattern that allows the behavior to be added to an individual object, e
either statically or dynamically, without affecting the behavior of other objects from the same class.


*/

//=======Single decorator

function vehicle( vehicleType ){

    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.license = "00000-000";

}

var truck = new vehicle( "truck" );

truck.setModel = function( modelName ){
    this.model = modelName;
};

truck.setColor = function( color ){
    this.color = color;
};

truck.setModel( "CAT" );
truck.setColor( "blue" );

console.log( truck ); // vehicle:truck, model:CAT, color: blue

// "vehicle" is still unaltered
var secondInstance = new vehicle( "car" );
console.log( secondInstance );




//=======Multiple decorators


function MacBook() {
    this.cost = function () { return 997; };
    this.screenSize = function () { return 13.3; };
}

/*Decorator 1*/
function Memory(macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    }
}
/*Decorator 2*/
function Engraving( macbook ){
    var v = macbook.cost();
    macbook.cost = function(){
        return  v + 200;
    };
}

/*Decorator 3*/
function Insurance( macbook ){
    var v = macbook.cost();
    macbook.cost = function(){
        return  v + 250;
    };
}
var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);
console.log(mb.cost()); //1522
console.log(mb.screenSize()); //13.3