/*

Bridge pattern - allows two components, a client and a service, to work together
 with each component having its own interface.
Bridge is a high-level architectural pattern and its main goal is to write better code through two levels of abstraction.

*/

class About{
    constructor(theme) {
        this.theme = theme
    }

    getContent() {
        return "About page in " + this.theme.getColor()
    }
}

class Careers{
    constructor(theme) {
        this.theme = theme
    }

    getContent() {
        return "Careers page in " + this.theme.getColor()
    }
}


class DarkTheme{
    getColor() {
        return 'Dark Black'
    }
}
class LightTheme {
    getColor() {
        return 'Off white'
    }
}


const darkTheme = new DarkTheme()

const about = new About(darkTheme)
const careers = new Careers(darkTheme)

console.log(about.getContent() )// "About page in Dark Black"
console.log(careers.getContent() )// "Careers page in Dark Black"