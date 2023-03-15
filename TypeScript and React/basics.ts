//Primitives: number, string, boolean
//More complex types: arrays,objects
//Function types, parameters

//Primitives:
let age: number = 18; //number is primitive, Number is the NUMBER object
age =18.8;
//age = '123';

let username: string = 'Gil';

let isStudent: boolean = true;
isStudent = false;

//Arrays and Objects
let hobbies: string[]; //string array
hobbies = ['Sports', 'Cooking', 'VideoGames']

//let person: any; //any type is basically going back to standar javascript
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Gil',
    age: 18,
}

let people: {
  name: string;
  age: number;
}[]; //array of objects

