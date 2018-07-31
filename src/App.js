export class HelloWorld {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello world, Webpack with ${this.name}`;
    }

}