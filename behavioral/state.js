/*
*
* allows an object to alter its behavior when its internal state changes.
*
* */

//ES6
class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
}


class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered);
    }
}

class Order {
    constructor() {
        this.state = new WaitingForPayment();
    }

    nextState() {
        this.state = this.state.next();
    };
}

//ES5
function Order() {
    this.state = new WaitingForPayment();

    this.nextState = function() {
        this.state = this.state.next();
    };
}


function WaitingForPayment() {
    this.name = 'waitingForPayment';
    this.next = function() {
        return new Shipping();
    };
}

function Shipping() {
    this.name = 'shipping';
    this.next = function() {
        return new Delivered();
    };
}

function Delivered() {
    this.name = 'delivered';
    this.next = function() {
        return this;
    };
}

