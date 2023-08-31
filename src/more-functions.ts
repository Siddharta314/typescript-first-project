
//parameters by default
const createOrder = (
  id: number,
  address: string,
  paymentMethod: boolean = false
) => {
  return {
    id, address, paymentMethod
  }
}

const createOrder1 = (
  id: number,
  address: string,
  paymentMethod?: boolean
) => {
  return {
    id, address, paymentMethod
  }
}

const p1 = createOrder(1, "Street 1")  //false
const p2 = createOrder1(2, "Street 2")  //undefined
console.log(p1, p2)


/************* nullish-coalescing *************/
//fixing the problem of || with ??
const createOrder2 = (
  id: number,
  address?: string,
  paymentMethod?: boolean
) => {
  return {
    id,
    address : address ?? "no address",
    paymentMethod : paymentMethod ?? false
  }
}
const p3 = createOrder2(3)
console.log(p3) //{ id: 3, address: 'no address', paymentMethod: false }



const sum = (...arg:number[]) => {
  return  arg.reduce((a, n)=> a + n, 0)
}
const value = sum(1,2,3,4)
console.log(value) //10




/************* OVERLOADING *************/
function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a +  b;
}

const number = add(1,2);
const name2 = add("elvis", "costello")
console.log(number.toExponential(2), name2.toLocaleUpperCase());

/************* INTERFACES *************/
//interfaces can inherit, types can't
interface HumanInterface {
  readonly name: string,
  age: number
}
interface SupermanInterface extends HumanInterface {
  power: string
}

const clark: SupermanInterface = {
  name: "Clark",
  age: 30,
  power: "fly"
}
//clark.name = "Pepe" ERROR
clark.age = 50; // NO ERROR
