// Does support
// string
// number 
// objects (JSON Object)
// array
// boolean
// null

// Dosen't Support undefined, data, function

var person = {
    name: 'Rahim', // String
    age: 25, // Number
    hometown: 'Dhaka', 
    married: false, // Boolean
    dob: "1995-08-12", // Date
    test_null: null, // null 
    test_undefined: undefined, // undefined
    greet: function() { // function
        console.log(`Hello ${this.name}`);
    },
}

person.greet();

var person_json = JSON.stringify(person);
console.log(person_json);