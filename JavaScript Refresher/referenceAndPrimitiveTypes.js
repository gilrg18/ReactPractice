const number = 1;
const num2 = number;
console.log(num2); //1
//numbers, strings, booleans are primitive types.
//whenever u reassign the variable in another variable it will copy the value

//Objects and arrays are reference types
const person ={
    name: 'Gil'
};

const secondPerson = person; //if you reassign an object or array you are copying the POINTER not the Value
//which causes problematic behaviour

person.name = 'Manu';
console.log(seondPerson); //second person will point to person's pointer in memory so name will be Manu 
//(if we change the name of person, it will also change for secondPerson)
//Its the same for arrays

//So we have to copy the values in an immutable way which means copying the object correctly using the SPREAD operator
const thirdPerson = {...person}; 