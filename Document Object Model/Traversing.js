let val;
let list = document.querySelector('ul');

val = list

// get childe node
val = list;
val = list.childNodes;
val = list.childNodes[5];
val = list.childNodes[4].nodeType;
val = list.childNodes[5].nodeType;

// Node type
// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype

val = list.children;
val = list.children[0];

list.children[0].textContent = "Hello";
val = list.children[1].children[0];
val = list.children[1].children[0].textContent;
val = list.children[1].children[0].href;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;
val = list.childElementCount;

let listItem = document.querySelector('ul li:first-child');

val = listItem
val = listItem.parentElement
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling;
val = listItem.nextSibling.nextSibling;

val = listItem.nextElementSibling.nextElementSibling.innerHTML;

listItem = document.querySelector('ul li:last-child');

val = listItem.previousSibling;
val = listItem.previousElementSibling; 


console.log(val);