/*
* Memento pattern is about capturing and storing the current state of an object in a manner
 * that it can be restored later on in a smooth manner.
* */

class EditorMemento {
    constructor(content) {
        this._content = content
    }

    getContent() {
        return this._content
    }
}

class Editor {
    constructor(){
        this._content = ''
    }

    type(words) {
        this._content = this._content + ' ' + words
    }

    getContent() {
        return this._content
    }

    save() {
        return new EditorMemento(this._content)
    }

    restore(memento) {
        this._content = memento.getContent()
    }
}

const editor = new Editor();

// Type some stuff
editor.type('This is the first sentence.');
editor.type('This is second.');

// Save the state to restore to : This is the first sentence. This is second.
const saved = editor.save();

// Type some more
editor.type('And this is third.');

// Output: Content before Saving
console.log(editor.getContent());// This is the first sentence. This is second. And this is third.

// Restoring to last saved state
editor.restore(saved);

console.log(editor.getContent()); // This is the first sentence. This is second.