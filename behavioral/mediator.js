/*
*
* A Mediator is an object that coordinates interactions (logic and behavior) between multiple objects.
* It makes decisions on when to call which objects, based on the actions (or inaction) of other objects and input.
*
* */


// Mediator
class ChatRoom {
    showMessage(user, message) {
        const time = new Date()
        const sender = user.getName()

        console.log(time + '[' + sender + ']:' + message)
    }
}

class User {
    constructor(name, chatMediator) {
        this.name = name
        this.chatMediator = chatMediator
    }

    getName() {
        return this.name
    }

    send(message) {
        this.chatMediator.showMessage(this, message)
    }
}

const mediator = new ChatRoom();

const john = new User('John Doe', mediator);
const jane = new User('Jane Doe', mediator);

john.send('Hi there!')
jane.send('Hey!')

// Output will be
// Feb 14, 10:58 [John]: Hi there!
// Feb 14, 10:58 [Jane]: Hey!