let re;
let str;

// postal code
re = /^[0-9]{4}$/;
str = "4000";

// phone num
// 01823888243 +8801823888243 8801823888243
re = /^(\+)?(88)?01[0-9]{9}$/;
str = '8801825236323';

// Email
// boubrihi77.learn@ed.com.bd
re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/; // + means one or more
str = 'boubrihi77.learn@edu.com.bd'; // ? means optionsal

console.log(re.test(str));