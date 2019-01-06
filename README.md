

# JavaScript design patterns 

Here you will find design patterns implemented in JavaScript. 
You can use links to quicky overview the examples


[Creational Patterns](#creational-patterns) | Structural Patterns | Behavioral Patterns
------------ | ------------- | -------------
Constructor | |

Chain Of Resp | Abstract Factory | Adapter
Command |  Builder | Bridge
Interpreter | Factory | Composite
Iterator | Prototype | Decorator
Mediator | Singleton | Facade
Memento | | Flyweight
Observer | | Proxy
State |
Strategy |
Template |
Visitor |

## Creational Patterns

### Constructor

This is a class-based creational design pattern. Constructors are special functions that can be used to instantiate new objects with methods and properties defined by that function.

It is not one of the classic design patterns. In fact, it is more of a basic language construct than a pattern in most object-oriented languages. But in JavaScript, objects can be created on the fly without any constructor functions or “class” definition.

```javascript
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
```



### Command

### Interpreter

### Iterator

### Mediator
