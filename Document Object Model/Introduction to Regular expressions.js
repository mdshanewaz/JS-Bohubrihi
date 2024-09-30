let re;
let str;

re = /hello/;
re = /Hello/;
re = /helLo/i; // i = case insensitive

console.log(re);
console.log(re.source);

str = 'Hello World!';
str = 'Agian Hello World!';
str = 'Hell World';
str = 'asdaHellosada Wordld';
str = 'Again Hello Wordld Hello!';
str = 'Again World!';

// exec() Returns result in an array or null
let result = re.exec(str);
console.log(result)

//  test() - true/false
let res = re.test(str);
console.log(res);

// match() - Returns array or null
str = 'Again Hello Wordld Hello!';
let ress = str.match(re);
console.log(ress);

// search() - Returns index of thr first match or -1
str = 'World'
result = str.search(re);
console.log(result);

// replace() - Return new string
str = 'Again Hello World Hello';
let newStr = str.replace(re, 'Hi');

console.log(result);
console.log(str);
console.log(re.source);
console.log(newStr);