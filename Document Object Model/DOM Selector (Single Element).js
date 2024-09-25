// document.getElemntById()
let val;

val = document.getElementById('title');
val = document.getElementById('title').className;
val = document.getElementById('title').style.color  = "Green";
val = document.getElementById('title').style.background = '#000';
val = document.getElementById('title').textContent = 'New Title';
val = document.getElementById('title').innerText = 'Hello Text';
val = document.getElementById('title').innerHTML = '<i>He He Boy<i/>';

val = document.getElementById('title');
val.innerText = "New New New";

// console.log(val);


// document.querySelector()
let val2;

val2 = document.querySelector('#title'); // ID
val2 = document.querySelector('.sample-class'); // Class
val2 = document.querySelector('h3');
val2 = document.querySelector('ol');
val2 = document.querySelector('ul li');
val2.style.background = 'Blue';
val2.style.color = '#fff';

val2 = document.querySelector('li:last-child');
val2 = document.querySelector('li:nth-child(3)').innerHTML;
val2 = document.querySelector('li:nth-child(4)').innerText="JavaScript";
val2 = document.querySelector('li:nth-child(odd)').innerText="JavaScript";
val2 = document.querySelector('li:nth-child(even)').innerText="JavaScript";

// console.log(val2);