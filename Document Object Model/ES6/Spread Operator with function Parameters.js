// Spread operatpr ...

let nums = [23, 1, -8, 54, 67];
// console.log(Math.max(nums));
console.log(Math.max(...nums));

let person = ['Sha', 'Newaz'];
let test = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
}

// test(person[0], person[1]);
test(...person);