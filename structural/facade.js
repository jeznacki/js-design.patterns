/*

Facade pattern - provides an interface that simplifies complex functionalities

*/



/* Es 6 */

class ShopFacade {
    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

    calc(price) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

class Discount {
    calc(value) {
        return value * 0.9;
    }
}

class Shipping {
    calc() {
        return 5;
    }
}

class Fees {
    calc(value) {
        return value * 1.05;
    }
}


/*ES 5 */

var shopFacade = {
    calc: function(price) {
        price = discount(price);
        price = fees(price);
        price += shipping();
        return price;
    }
};

function discount(value) {
    return value * 0.9;
}

function shipping() {
    return 5;
}

function fees(value) {
    return value * 1.05;
}

