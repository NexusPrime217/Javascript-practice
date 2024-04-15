const name="abhishek"
let value=20
//console.log(name+value); old syntax not used in modern days.
//modern syntax
//console.log(`${name} has ${value} points`); //also useful at backend

const str=new String('abhishek-tulekar') //another way

//console.log(str[0])
//console.log(str.length)
//console.log(str.charAt(3))
//console.log(str.indexOf('t'));

const newstr=str.substring(0,4)
// console.log(newstr);

const anotherString=str.slice(-16,2)//ignore negative value and starts from 0
// console.log(anotherString);

const newStringOne="   abhishek   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url="https://abhishek.com%21tulekar"

// console.log(url);
//console.log(url.replace('%21', '-'));
// console.log(url.includes('abhi'));

console.log(url.split('.'))

