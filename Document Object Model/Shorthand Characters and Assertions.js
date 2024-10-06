let re;
let str;

// Shortand Character Class

re = /\w/; // word character = Alphabet, numners or _
re = /\w+/; // one or moew
re = /\W/; // Non word character means except the words
re = /\W+/; // one or more

re = /\d/; // only digits
re = /\d+/;

re = /\D/; // Non digit char

re = /\s/; // match white spaces
re = /\S/;  // non white space
re = /Hello\b/; // word boundary
re = /\bHello\b/; // word bounday

// Assertions 
re = /x(?=y)/ // mathch x only if x is before y
re = /x(?=yz)/ // mathch x only if x is before yz
re = /x(?!yz)/;  

str = '{*%!&y';
str = '{^&dasasasdjkhs*';
str = '{^&%&^*(*';
str = 'kjasdhas793420';
str = '1213213801280';
str = 'cdc';
str = '';
str = 'Hello79 askd';

str = 'fsdasxdyzkjsad';

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