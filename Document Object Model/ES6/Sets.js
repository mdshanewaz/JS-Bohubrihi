// Set
let mySet = new Set([1, 2, 3, 2]);

// Add
mySet.add('Hello!');
mySet.add(2);

// clear full sey
// mySet.clear();

// Delete
mySet.delete(2);

console.log(mySet);

// Check member
console.log(mySet.has(1));
console.log(mySet.has(2));
console.log(mySet);
console.log(mySet.size);

// Iteration Set
for (x of mySet) {
    console.log(x);
}

let iter = mySet.entries();
console.log(iter);

// console.log(iter.next());
// console.log(iter.next()); 
// console.log(iter.next()); 

for (x of mySet.entries()) {
    console.log(x);
}

// for (x of mySet.keys()) {
//     console.log(x);
// }

// for (x of mySet.values()) {
//     console.log(x);
// }

// for (let [x] of mySet.entries()) {
//     console.log(x);
// }

let iter2 = [...mySet.entries()];
// let iter2 = [...mySet.keys()];
// let iter2 = [...mySet.values()];

console.log(iter2);

mySet.forEach(values => console.log(values));