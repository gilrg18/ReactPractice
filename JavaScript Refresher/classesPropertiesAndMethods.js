//properties are like "variables attached to classes/objects"
//ES6
// constructor(){
//     this.myProperty = 'value';
// }

//ES7
myProperty = "value";

//Methods are like "functions attached to classes/objects"
//ES6
//myMethod(){ return }

//ES7 - storing a function as a value of a property makes "this" reference errors to not happen
myMethod = () => {
  return;
};

//Next generation syntax
class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Gil";
  gender = "not male"
  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName(); //Gil
person.printGender(); //not male
