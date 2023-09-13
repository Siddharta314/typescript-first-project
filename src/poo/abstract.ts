//import { Human, Player } from './inheritance';

export abstract class Human {
  constructor(protected name: string) {}

  greeting() {
    return `Hello, my name is ${this.name}`;
  }

  playing() {
    return 'not yet';
  }
}

export class Player extends Human {
  constructor(name: string, private game: string = '') {
    super(name);
  }

  playing() {
    return `${this.name} is playing ${this.game}`;
  }
}

// const human = new Human(); ERROR
const james = new Player('James', 'poker');
console.log(james.playing()); //James is playing poker

console.log(james.greeting()); //Hello, my name is James
