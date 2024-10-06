let re;
let str;

re = /h[ea]llo/; // Must be on of the inside the []
re = /[HA]ello/i;
re = /[Hh]ello/;
re = /[^ha]ello/; // Those except inside brackets
re = /^[ha]ello/; // Must start with  one of the inside []
re = /[a-z]ello/; // range
re = /[A-Z]ello/;
re = /[a-z]ello/i;
re = /[a-z]ello/;
re = /[A-Za-z]ello/;
re = /[0-9]ello/;
re = /^[0-9]ello/ 
re = /[^0-9]ello/; // No degits at start
re = /[0-9][0-9]ello/; // two digits

// {} -quantiifier

re = /el{2}o/; // must occur exactly 2 times
re = /hel{2,5}o/; // range
re = /hel{2}o/; // Atleas 2 times 

// Parenthesis () - Grouping

re = /([0-9]){10}/;


str = 'Hello';
str = 'Aello';
str = 'hello';
str = 'aello';
str = 'tello';
str = 'Tello';
str = '5ello';
str = 'Again 9ello'; 
str = '9ello Again';
str = 'tello hella';
str = 'Again 89ello';
str = 'Hi hello';

str = 'helo';
str = 'Again hello';

str = '018213992734e';

// Bangladeshi Phn

re = /^01[0-9]{9}$/;
str = '01213992734';

re = /^\+8801[0-9]{9}/;
str = '+8801213992734';

// match 0c0c0a0e

re = /^([0-9][a-z]){4}/;
str = '2x9b6t4r'

console.log(re.exec(str));

reTest(re, str)

function reTest(re, str){
    if(re.test(str)) {
        console.log(`'${str}' matchs '${re.source}'`);
    }
    else {
        console.log(`'${str}' doesn't matchs '${re.source}'`);   
    }
}