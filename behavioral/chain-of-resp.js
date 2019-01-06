/*
* The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request.
* This pattern is essentially a linear search for an object that can handle a particular request.
* An example of a chain-of-responsibility is event-bubbling in which an event propagates through a series of nested controls one of which may choose to handle the event.
*
* */

//ES6

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(p) {
        this.products.push(p);
    };
}

class Discount {
    calc(products) {
        let ndiscount = new NumberDiscount();
        let pdiscount = new PriceDiscount();
        let none = new NoneDiscount();
        ndiscount.setNext(pdiscount);
        pdiscount.setNext(none);
        return ndiscount.exec(products);
    };
}

class NumberDiscount {
    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    };

    exec(products) {
        let result = 0;
        if (products.length > 3)
            result = 0.05;

        return result + this.next.exec(products);
    };
}

class PriceDiscount{
    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    };

    exec(products) {
        let result = 0;
        let total = products.reduce((a, b)=> a + b);

        if (total >= 500)
            result = 0.1;

        return result + this.next.exec(products);
    };
}

class NoneDiscount {
    exec() {
        return 0;
    };
}


var cart = new ShoppingCart();
cart.addProduct(30);
cart.addProduct(130);
cart.addProduct(230);
cart.addProduct(230);

//calculate discount depends on Price, Number of products etc..
//discount request is bubling from one object to another

var discount = new Discount().calc(cart.products);

console.log(discount); //0.15000000000000002



//ES 5

function ShoppingCart() {
    this.products = [];

    this.addProduct = function(p) {
        this.products.push(p);
    };
}

function Discount() {
    this.calc = function(products) {
        var ndiscount = new NumberDiscount();
        var pdiscount = new PriceDiscount();
        var none = new NoneDiscount();

        ndiscount.setNext(pdiscount);
        pdiscount.setNext(none);

        return ndiscount.exec(products);
    };
}

function NumberDiscount() {
    this.next = null;
    this.setNext = function(fn) {
        this.next = fn;
    };

    this.exec = function(products) {
        var result = 0;
        if (products.length > 3)
            result = 0.05;

        return result + this.next.exec(products);
    };
}

function PriceDiscount() {
    this.next = null;
    this.setNext = function(fn) {
        this.next = fn;
    };
    this.exec = function(products) {
        var result = 0;
        var total = products.reduce(function(a, b) {
            return a + b;
        });

        if (total >= 500)
            result = 0.1;

        return result + this.next.exec(products);
    };
}

function NoneDiscount() {
    this.exec = function() {
        return 0;
    };
}

var cart = new ShoppingCart();
cart.addProduct(30);
cart.addProduct(130);
cart.addProduct(230);
cart.addProduct(230);

//calculate discount depends on Price, Number of products etc..
//discount request is bubling from one object to another

var discount = new Discount().calc(cart.products);

console.log(discount); //0.15000000000000002