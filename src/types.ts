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


//using Object might accept things you don't want
let array:(string | boolean| number | Object)[] = ['cat', true, 69];
array.push(false);


// DANGER DANGER any and cast
let dynamic: any;
dynamic = "WHAT AM I ? "
console.log((dynamic as string).toLocaleLowerCase())//what am i ?

//union types
function checkID(id: string | number){
  if (typeof id === "number"){
    return id.toString()
  }
  return id;
}

console.log( checkID(332).startsWith("3")  ) //true

//if we want to create an alias type
type userID = number | string | boolean
function createUser(user: userID ){
  //we only need to change the type in one place
}


let burgerSize: "M" | "L" | "XXL"



