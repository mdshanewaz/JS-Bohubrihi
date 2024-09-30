// console.log('Before');

// try {
//     // test()
//     // undefined.test();
// } catch (err) {
//     // console.log(err)
//     console.log(err.message);
//     console.log(err.name);
// } finally {
//     console.log('I am inside finally!');
// }

// console.log('After');


let a = 1

try {
    if (a>15) throw 'Two Big';
    else if (a<4) throw 'Too small';
} catch(err) {
    console.log(err)
}