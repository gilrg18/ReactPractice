function printMyName(name) {
  console.log(name);
}

printMyName(); //undefined
printMyName("Gil"); //Gil

//Arrow functions avoid this keyword errors and maintain its value in runtime
//It can also be defined with let if you plan to change the value of the variable
const printName = (name) => {
  console.log(name);
};

printName("Gil");

const printName2 = (name) => {
  console.log(name);
};

printName2("Gil");

const printName3 = () => {
  console.log("Gil");
};

printName3();

const multiply = (num) => {
    return number * 2
};

console.log(multiply(2));

const multiply2 = (num) => number * 2;
;

console.log(multiply2(2));