// class Person {
//     //properties
//     name = 'Gil'
//     //methods
//     call = () => {return}
// }

// const myPerson = new Person();
// myPerson.call();
// console.log(myPerson.name);

// //inheritance
// class Person extends Master

class Human {
    constructor(){
        this.gender = 'male';
    }
    
    printGender(){
        console.log(this.gender);
    }
}

class Person  extends Human{
    constructor(){
        super(); //uses the parents constructor (MUST use otherwise reference error)
        this.name='Gil';
    }
    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName(); //Gil
person.printGender(); //male