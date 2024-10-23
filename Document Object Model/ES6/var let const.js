// var a = 10
// a = a+7
// console.log(a);

// var a = 77
// console.log(a);

// let b = 19
// console.log(b);

// // let b = 11
// // console.log(b);
// // This is not acceptable

// const c = 13;
// // c = 14;
// console.log(c)

var a = 1;
let b = 2;
const c = 3;
let d = 10;

console.log(`Global Scope: `, a, b, c, d);


function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    let e = 12;

    console.log(`Function Scope: `, a, b, c, d);
    console.log(`Function Scope: `, a, b, c, d, e);
}

test();

// e can not be accessed
// console.log(`Global Scope: `, a, b, c, d, e);
console.log(`Global Scope: `, a, b, c, d);


if (true) {
    var a = 7;
    let b = 8;
    const c = 9;

    console.log(`If Scope: `, a, b, c);
}

console.log(`Global Scope: `, a, b, c);

for (var a=0; a<10; a++) {
    console.log(`Loop a : `, a);
}

console.log(`Global Scope: `, a, b, c);

for (let b=0; b<10; b++) {
    console.log(`Loop b : `, b);
}

console.log(`Global Scope: `, a, b, c);
