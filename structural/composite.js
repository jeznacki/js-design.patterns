/*

Composite pattern
This is a structural design pattern that composes objects into tree-like structures to represent whole-part hierarchies.
In this pattern, each node in the tree-like structure can be either an individual object
or a composed collection of objects. Regardless, each node is treated uniformly.

*/

/*ES6 */

//Equipment
class Equipment {

    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

// --- composite ---
class Composite extends Equipment {

    constructor() {
        super();
        this.equipments = [];
    }

    add(equipment) {
        this.equipments.push(equipment);
    }

    getPrice() {
        return this.equipments.map(equipment => {
            return equipment.getPrice();
        }).reduce((a, b)  => {
            return  a + b;
        });
    }
}

class Cabbinet extends Composite {
    constructor() {
        super();
        this.setName('cabbinet');
    }
}

// --- leafs ---
class FloppyDisk extends Equipment {
    constructor() {
        super();
        this.setName('Floppy Disk');
        this.price = 70;
    }
}

class HardDrive extends Equipment {
    constructor() {
        super();
        this.setName('Hard Drive');
        this.price = 250;
    }
}

class Memory extends Equipment {
    constructor() {
        super();
        this.setName('Memory');
        this.price = 280;
    }
}

/*ES5 */


// composition
function EquipmentComposition(name) {
    this.equipments = [];
    this.name = name;
}

EquipmentComposition.prototype.add = function(equipment) {
    this.equipments.push(equipment);
};

EquipmentComposition.prototype.getPrice = function() {
    return this.equipments.map(function(equipment){
        return equipment.getPrice();
    }).reduce(function(a, b) {
        return  a + b;
    });
};

function Equipment() {}

Equipment.prototype.getPrice = function() {
    return this.price;
};

// -- leafs
function FloppyDisk() {
    this.name = "Floppy Disk";
    this.price = 70;
}
FloppyDisk.prototype = Object.create(Equipment.prototype);

function HardDrive() {
    this.name = "Hard Drive";
    this.price = 250;
}
HardDrive.prototype = Object.create(Equipment.prototype);

function Memory() {
    this.name = "8gb memomry";
    this.price = 280;
}
Memory.prototype = Object.create(Equipment.prototype);

module.exports = [EquipmentComposition, FloppyDisk, HardDrive, Memory];