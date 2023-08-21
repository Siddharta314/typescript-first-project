
function createElement(
  name: string,
  time : Date,
  ){
    return {name, time};
}

const elem1 = createElement('E1', new Date('1995-12-17T03:24:00'));

console.log(elem1)

const createElementArrow = (
  name: string,
  time: Date,
  log? : number
  ) =>({
    name,
    time,
    log
  })

const elem2 = createElementArrow('E2', new Date('1996'), 10);
const elem3 = createElementArrow('E3', new Date('1996'));
console.log(elem2);
console.log(elem3);



//define what a function returns
const printName = (name: string, surname: string) : string => {
  return name + ' ' + surname
}

const printa = (str: string): void => console.log(str);

printa(printName("Han", "Solo"));



//objects as parameters
const login = (data: {email: string; password: string})=>{
  console.log(data.email, "\n***********");
}

login({
  email:"google@gmail.com",
  password: "password"
});


