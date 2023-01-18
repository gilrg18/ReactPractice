//...
//Spread - Used to split up array elements OR object properties
const newArray = [...oldArray, 1.2];
const newObject = { ...oldObject, newProp: 5 };

//Rest - Used to merge a list of function arguments into an array
function sortArgs(...args) {
  return args.sort();
}

//SPREAD
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers); //[1,2,3,4]
newNumbers = [numbers, 4];//[[1,2,3],4]


const person = {
    name:'Gil'
};

const newPerson = {
    ...person,
    age: 26
};

console.log(newPerson); //[object Object]{ age:26, name:'Gil'}


//REST
const filter = (...args) => {
    return args.filter(el => el === 1); //=== checks for type and value equality
}