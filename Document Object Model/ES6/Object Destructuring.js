// Object Destructing
let Person = {
    firstName : 'Fazle',
    lastName : 'Rahat',
    DoB : '20-08-1996',
}

// let fname = Person.firstName,
// lname = Person.lastName,
// Dob = Person.DoB;

let {firstName, lastName, DoB} = Person;
console.log(firstName, lastName, DoB);

let {firstName:fname, lastName:lname, DoB:dob} = Person;
console.log(fname, lname, dob);

function display({firstName:fname, lastName:lname, DoB:dob}) {
    console.log(fname, lname, dob);
}

display(Person);