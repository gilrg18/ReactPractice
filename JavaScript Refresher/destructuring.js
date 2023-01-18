//Easily extract array elements or object properties and store them in variables
//Array Destructuring
[a,b] = ['Hello','Gil'];
console.log(a); //Hello
console.log(b); //Gil

//Object Destructuring
const {name} = {name:'Gil',age:26}
console.log(name) //Gil
console.log(age) //undefined


const numbers = [1,2,3];
[num1, num2] = numbers;
console.log(num1,num2)//1,2
[num1, ,num3] = numbers;
console.log(num1,num3)//1,3