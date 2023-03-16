//Primitives: number, string, boolean
//More complex types: arrays,objects
//Function types, parameters

//Primitives:
let age: number = 18; //number is primitive, Number is the NUMBER object
age = 18.8;
//age = '123';

let username: string = "Gil";

let isStudent: boolean = true;
isStudent = false;

//Arrays and Objects
let hobbies: string[]; //string array
hobbies = ["Sports", "Cooking", "VideoGames"];

//let person: any; //any type is basically going back to standar javascript
let person: {
  name: string;
  age: number;
};

person = {
  name: "Gil",
  age: 18,
};

let people: {
  name: string;
  age: number;
}[]; //array of objects

//Type inference:
let course = "React";
//Doing this is redundant: let course: string = 'React'
//course = 123; //error cause course is inferred as a string

//Union Types - Allow more than one type
let curso: string | number = "react";
curso = 123;
let user: string | string[] = "Gil";
user = ["Gil", "Mike"];

//Type Aliases - to avoid type definition repetitions
type Person = { name: string; age: number }; //custom type Person
let myPerson: Person = { name: "Gil", age: 26 };
let myPersons: Person[] = [
  { name: "Gil", age: 26 },
  { name: "Mike", age: 28 },
];

//Functions and Types
function add(a: number, b: number): number | string { //the return type can also be inferred if you dont add it
  return a + b;
}

function print(value: any): void { //void return type doesnt return anything
  console.log(value);
}
