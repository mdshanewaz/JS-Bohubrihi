// Define a function 
function hello() {
    console.log('Hello!');
}

hello();

// Define arrow function
let world = () => {
    console.log('World!');
}

world();

// Arrow with parameter
let hi = (name, dob) => {
    console.log(name, dob);
}

hi('Love!', '01-01-01');

// parenthesis and cury bracks can be avoided for signle parameter and statement (not single return statement)
let hi2 = name => console.log(name);

hi2('Hi2 arrow func');

// some example
// both are same
// let square= num => { return num*num;}
let square= num => num*num;

console.log(square(5));

// call back function is what a function is used as the parameter of an another function
numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(function (element) {
    console.log(element); // here forech function is taking another function as the parameter
});

let printAll = (item) => {
    console.log(item)
}

numbers.forEach(printAll);
// numbers.forEach(printAll()); call back function can not user parenthesis while used as parameter 

let sqrNum1 = numbers.map(function(item) {
    return item*item;
})

console.log(sqrNum1);


let sqrNum2 = numbers.map(function(item) {
    return item*item;
})

console.log(sqrNum2);

function sqrAll1(item) {
    return item*item;
}

let sqrNum3 = numbers.map(sqrAll1);
console.log(sqrNum3);


let sqrAll2 = (item) => item*item;

let sqrNum4 = numbers.map(sqrAll2);
console.log(sqrNum4);