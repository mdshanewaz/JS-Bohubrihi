let fruits = ['apple', 'graps', 'mango', 'jackfruit'];
let [first, second, ...third]= fruits;
console.log(first);
console.log(second);
console.log(third);

let person = {
    fname : 'Shawon',
    lname : 'Newaz',
    dob : '10-09-97',
    country : 'Bd', 
}

let {fname, lname, ...dob} = person
console.log(fname);
console.log(lname);
console.log(dob);

let test = (name, numbers) => {
    console.log(name);
    console.log(numbers);
}

test('Shah', 57);

let test2 = (name, ...numbers) => {
    console.log(name);
    console.log(numbers);
}

test2('Shah', 57, 34,75);

let test3 = (...numbers) => {
    console.log(numbers);
}

test3('Shah', 57, 34,75);

let test4 = (name, num1, ...numbers) => { // Rest Operator
    console.log(name);
    console.log(num1)
    console.log(numbers);
}

test4('Shah', 57, 34,75);

let moreNum = [71, 65, 5, 90];
test4('Newaz', moreNum[0], moreNum); // Spreaf operator