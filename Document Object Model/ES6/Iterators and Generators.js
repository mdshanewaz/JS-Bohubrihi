// Iterator
let iterable = 'Hello!';

// Symbol.iterator 
let iter1 = iterable[Symbol.iterator];
console.log(iter1);

let iter2 = iterable[Symbol.iterator]();
console.log(iter2);

console.log(iter2.next());
console.log(iter2.next().value);
console.log(iter2.next());
console.log(iter2.next());

console.log("Other codes!");

console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

// Array iterator
let iterable2 = [1, 4, 3, 2, 6];

// Symbol.iterator 
let iter3 = iterable2[Symbol.iterator]();
console.log(iter3);


let names = ["Rahim", "Karim", "Rony", "Jashim"];
// Custom Iterator
function customIterator(arr) {
    let i = 0;

    // Return an object {}
    return {
        // next property
        next: function() {
            return i < arr.length ? {value : arr[i++], done : false} : { value : 'Undefined', done : true }
        } 
    };
}

let members = new customIterator(names);
console.log(members);
console.log(members.next());
console.log(members.next().value);
console.log(members.next().value);

console.log("Random Codes..");

console.log(members.next());
console.log(members.next());

// Generators
function* genFunction() {
    console.log('I am some code1');
    yield 1;
    console.log('I am some code2');
    console.log('I am some code3');
    console.log('I am some code4');
    yield 'Rana';
    return;
    yield 4;
    yield 'Kamal';
} 

let iter = genFunction();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next().value);
// console.log(iter.next().value);