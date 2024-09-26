// Create Item
let olItem = document.createElement('li');

// add class and ID
olItem.className = 'a new-element';
olItem.id = 'new-id';

// add attribute
olItem.setAttribute('title', 'a new title with attribute');
olItem.appendChild(document.createTextNode('JavaScript'));

document.querySelector('ol').appendChild(olItem);

// console.log(olItem.innerHTML);


let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href', 'https://instagram.com');

ulItem.appendChild(link);

document.querySelector('ul').append(ulItem)

// console.log(ulItem);
// console.log(link);

// Replacing elements
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 new heading'));
newHeading.className = 'sample-class';

let oldHeading = document.querySelector('h3');
let parent = document.querySelector('.container');
// parent = oldHeading.parentElement;
parent.replaceChild(newHeading, oldHeading);

// console.log(newHeading);
// console.log(oldHeading);
// console.log(parent)

// Remove element
let listitems = document.querySelectorAll('li');
let list = document.querySelector('ul');

// listitems[0].remove();
// listitems[5].remove();

// console.log(listitems);


list.removeChild(listitems[5]);

list.classList.add('new-class');
// list.className= 'new-class-2'; 
list.classList.remove('sample-class');

let val = list.hasAttribute('title');
list.setAttribute('title', 'new attribute');
list.removeAttribute('title');

// console.log(val);

console.log(list.attributes);