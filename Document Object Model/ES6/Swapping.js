// Swao variable

let a, b;
a = 20,
b = 8;

console.log(`a = ${a}, b = ${b}`);

a = a+b
b = a-b
a = a-b

console.log(`a = ${a}, b = ${b}`);

[a, b] = [b, a];
console.log(`a = ${a}, b = ${b}`);