class Dog {
  //by default is public

  // private name: string = '';
  // private age: number = 0;
  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this.age = age;
  // }
  // a shortcut
  #age: number = 0;
  constructor(private name: string = '', age: number = 0) {
    this.#age = age
  }

  talk(): string {
    return this.#age > 2 ? `${this.name} is talking 🙈` : 'Too young to talk';
  }
  static poop(): void {
    console.log('💩');
  }
  get age(): number {
    return this.#age;
  }
  set age(value: number){
    if (value > 0 && value < 21){
      this.#age = value;
    }
  }
}

const myDog = new Dog('Alexander',5);
console.log(myDog);
console.log(myDog.talk());
Dog.poop();

myDog.age = 10
console.log(myDog.age )
