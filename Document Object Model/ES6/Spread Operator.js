// Spread Operateor

let str = 'Bohubrihi';
let newStr = [...str];
console.log(newStr);

let fruit1 = ['Apple', 'Pine-apple', 'Orange'];

let fruit2 = ['Mango', 'Orange'];

let newFruit = 'Jackfruit';

let newArr = [...fruit1, newFruit, ...fruit2,];
console.log(newArr)

let Person = {
    firstName : 'Fazle',
    lastName : 'Rahat',
    DoB : '20-08-1996',
}

let newperson = {...Person};
console.log(newperson);

let newperson2 = {...Person, newdob:"20-09-1995"};
console.log(newperson2);
