// JSON.stringify() --> JS object to JSON String
// JSON.parse() --> JSON String to JS Object

var person1 = {
    "name": "Rahim", // String
    "age": 25, // Number
    "hometown": "Dhaka", 
}

var person2 = {
    name: "Karim", // String
    age: 26, // Number
    hometown: "Chittagong", 
}

// console.log(person2);
// console.log(person1);

var person1_json = JSON.stringify(person1);
console.log(person1_json);
// person1_json = JSON.parse(person1);

var person1_obj = JSON.parse(person1_json);
console.log(person1_obj);

console.log(person1.name);