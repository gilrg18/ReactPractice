//https://jsbin.com/?js,output
//online javascript console
var myVar =x;
var myName = "Gil";
console.log(myName); //Gil

myName = "Gilb";
console.log(myName); //Gilb

//With ES6 let and const were introduced
//let for variables that change
let myName = "Gil";
console.log(myName); //Gil

myName = "Gilb";
console.log(myName); //Gilb

//const for constants (variables that dont change)
const myName = "Gil";
console.log(myName); //Gil

myName = "Gilb";
console.log(myName); //TypeError: Assignment to constant variable

