let val ;
val = this;
// console.log(val);

// let val2=window;
// console.log(val2);

val = window.document;
val = document.head;
val = document.body;
val = document.all;
val = document.all[10];
val = document.all.length;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.forms[1];
val = document.forms[0].method;
val = document.forms[0].action;
val = document.links;
val = document.links[0];
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;
val = document.images;
val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

link = document.links;

// console.log(link);

let linkAry = Array.from(link);

linkAry.forEach(function(l){
    console.log(l.getAttribute('src'))
});