let re;
let str;

re = /hello/;
re = /hello/i;
re = /loW/i;

re = /^hello/i; // ^ must start with this string
re = /Hello$/; // must end with thes string $
re = /rld!$/;
re = /^hello$/; // ^ must start and end with the strig $
re = /^h.llo/;
re = /h*llo/; // 0 or moretimes
re = /he?llo/; // character before the ? sign can be or not available but no orther character except it
re = /he?a?llo/;
re = /hello\?/; // escaping 

str = 'Again Hello World!';
str = 'hello hello';
str = 'hello';
str = 'hallo';
str = 'hillo';
str = 'hi llo';
str = 'hllo';
str = 'h llo';
str = 'hillo world';
str = 'hello world';
str = 'hillo';
str = 'hilo';
str = 'hllo';
str = 'h2123llo';
str = 'hello';
str = 'hllo';
str = 'hallo';
str = 'htllo';
str = 'heallo';
str = 'haello';
str = 'hello?'; 

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