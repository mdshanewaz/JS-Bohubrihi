// Maps

let myMap = new Map(
    [
        ['FirstKey', 10],
        ['SecondKey', 'Sazzad'],
    ]
);

console.log(myMap);

// Add 
myMap.set('ThirdKey', 'Hello');
console.log(myMap);

console.log(myMap.get('FirstKey'));
console.log(myMap.has('SecondKey'));
console.log(myMap.has('SecondK'));
console.log(myMap.size);

for (let x of myMap) {
    console.log(x);
}

for (let x of myMap.entries()) {
    console.log(x);
}

for (let [x, y] of myMap) {
    console.log(x, y);
}

for (let x of myMap.keys()) {
    console.log(x);
}

for (let x of myMap.values()) {
    console.log(x);
}

myMap.forEach((x, y) => {
    console.log(x, y);
})

let arr1 = Array.from(myMap);
console.log(arr1);
let arr2 = Array.from(myMap.keys());
console.log(arr2);
let arr3 = Array.from(myMap.values());
console.log(arr3);