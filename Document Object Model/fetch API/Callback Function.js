// setTimeout(function() {
//     console.log('Hello World!');
// }, 2000);

let persons = [
    {
        firstName: 'Shah',
        lastName: 'Newaz',
    },
    {
        firstName: 'Kawser',
        lastName: 'Ahmed', 
    }
]

// function createPerson(person) {
//     setTimeout(function () {
//         persons.push(person);
//     }, 4000);
// }

// function getPerson() {
//     setTimeout(function() {
//         let output = '';
//         persons.forEach(function(person){
//             output += `<li>${person.firstName} ${person.lastName}</li>`;
//         },);
//         document.getElementById('output').innerHTML = output;
//     }, 2000);
// }

// createPerson({firstName: 'Shah', lastName: 'Waliullah'});
// getPerson();

function createPerson(person, callback) {
    setTimeout(function () {
        persons.push(person);
        callback();
    }, 1000);
}

function getPerson() {
    setTimeout(function() {
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`;
        },);
        document.getElementById('output').innerHTML = output;
    }, 500);
}

createPerson({firstName: 'Shah', lastName: 'Waliullah'}, getPerson);