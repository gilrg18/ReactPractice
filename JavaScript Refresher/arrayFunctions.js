const numbers = [1, 2, 3];

//.map() - On each element do something
const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers); //[1,2,3]
console.log(doubleNumArray);//[2,4,6]