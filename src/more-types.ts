/********** ENUMS **********/

enum Food {
  Burger = '🍔',
  Chips = '🍟'
}

type Meal = {
  food: Food,
  quantity: number
}

const mealprep: Meal = {
  food: Food.Burger,
  quantity: 2
}
console.log(mealprep) //{ food: '🍔', quantity: 2 }


/********** TUPLES **********/
const animal: [string, number, boolean] = ["cat", 3, true]
animal.push("dog")  //no error
//console.log(animal[3])  //error, tuple has no element at position 3
const [specie, age, isAlive] = animal;


/********** UNKOWN **********/

let foo: unknown = null;
console.log(foo); //null
foo = "Bob";
// foo.toUpperCase(); //ERROR
if (typeof foo === 'string') {
  foo = foo.toUpperCase();  //NO ERROR
}
let bob: string = foo as string;
console.log(bob); //BOB


/********** NEVER **********/
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function keepProcessing(): never {
  while (true) {
    console.log('I always does something and never ends.')
  }
}
