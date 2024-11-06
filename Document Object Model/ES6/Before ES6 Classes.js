// ES6 constructor

function Person(age, name) {
    this.age = age;
    this.name = name;
}

// Add method to function 
Person.prototype.getName = function() {
    console.log(this.name, ' age is ', this.age);
}

let person1 = new Person(18, 'Sazzad');
console.log(person1);
person1.getName();


// ES6 class
class Persons{
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }

    getNames() {
        console.log(this.name, ' age is ', this.age);
    }
}
let person2 = new Persons(25, 'Rana');
console.log(person2);
person2.getNames();