let name1: string = "Andrew";
let height: number = 170;

//we can't do this
// height = "180"

//in this case we don't have a type
const GRAVITY = 9.8;

//these are number
let hexadecimal = 0xaaa;
let binary = 0b1011;
console.log(hexadecimal, binary); //2730 11

//name is used in another file
(() => {
  let name = "Andrew1";
  let isWorking = true; //vboolean

  let another = undefined
  console.log(another)

})();
