let list = document.getElementsByClassName('sample-class');
// console.log(list[0]);
list[0].style.background = 'red';


let list2 = document.getElementsByTagName('li');
// console.log(list2)

let list3 = document.querySelector('ol').getElementsByTagName('li');

let lst = Array.from(list3) 

lst.forEach(element => {
    // console.log(element.innerHTML);
});

// console.log(list3[3])

// query selector all
list = document.querySelectorAll('li');
list = document.querySelectorAll('ol li');

list.forEach(element => {
    // console.log(element.innerHTML);
})

// console.log(element.innerHTML)

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(element => {
    element.style.background='red'
})

liEven.forEach(element => {
    element.style.background='green'
})
