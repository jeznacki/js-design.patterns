# JavaScript design patterns 

Here you will find design patterns implemented in JavaScript. 

## Creational

* [Constructor](creational/constructor.js)  functions that can be used to instantiate new objects
* [Factory](creational/factory.js)  factory simply generates an instance for client without exposing any instantiation logic to the client                                                                 
* [Prototype](creational/prototype.js) In this, we use a sort of a “skeleton” of an existing object to create or instantiate new objects.
* [Singelton](creational/singelton.js) pattern where only one instance of a class can exist.
* [Abstract Factory](creational/abstract-factory.js) factory that groups the individual but related/dependent factories together without specifying their concrete classes
* [Builder](creational/bulider.js) separate the construction from its representation. Useful when there are a lot of steps involved in creation of an object.


## Structural

* [Adapter](structural/adapter.js) lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.
* [Bridge](structural/bridge.js) decouple an abstraction of object from its implementation so that the two can vary independently
* [Composite](structural/composite.js) composes objects into tree-like structures to represent whole-part hierarchies
* [Decorator](structural/decorator.js) lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.
* [Facade](structural/facade.js) provides a simplified interface to a complex subsystem. (jquery)
* [Flyweight](structural/flyweight.js) minimize memory usage or computational expenses by sharing as much as possible with similar objects. (memoization, cache)
* [Proxy](structural/proxy.js)  provides a placeholder for another object to control access, reduce cost, and reduce complexity.

## Behavioral

* [Chain Of Resp](behavioral/chain-of-resp.js) Request enters from one end and keeps going from object to object till it finds the suitable handler. (even propagation)
* [Command](behavioral/command.js) provide the means to decouple client from receiver. (Reciver, Command, Invoker)
* [Iterator](behavioral/iterator.js) way to sequentialy access the elements of an object without exposing the underlying presentation.
* [Observer](behavioral/observer.js) defines a dependency between objects so that whenever an object changes its state, all its dependents are notified. (Pub/Sub, Observables)
* [Visitor](behavioral/visitor.js) let's you add further operations to objects without having to modify them.
* [Mediator](behavioral/mediator.js) control the interaction between two objects  (chatroom, users)
* [Memento](behavioral/memento.js) capturing and storing the current state of an object in a manner that it can be restored later on in a smooth manner. (edit ,save, restore)
* [State](behavioral/state.js) lets you change the behavior of a class when the state changes. (waiting for payment ,procesing, shipping)



