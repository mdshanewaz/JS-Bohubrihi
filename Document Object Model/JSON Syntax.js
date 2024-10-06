var student = {
    name : 'Rahim',
    age : 25,
    hometown : 'Dhaka'
}

var student_json = JSON.stringify(student);

// var student_json = {
//     'name' : 'Rahim',
//     'age' : 25,
//     'hometown' : 'Dhaka'
// }

console.log(student_json);

var student_new = JSON.parse(student_json);
console.log(student_new);