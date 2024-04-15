const score = 400;//takes number as datatype

const balance=new Number(100);//another way
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toFixed(2));//fixed number after decimal point

const otherNumber=123.8966
//console.log(otherNumber.toPrecision(3));//number of digits with round off //124 in this case 

const otherNumber2=1213.8966
//console.log(otherNumber2.toPrecision(3));

const hundreds=10000000
//console.log(hundreds.toLocaleString());//US standard ,(comma) are added
//console.log(hundreds.toLocaleString('en-IN'));//INDIAN standard ,(comma) are added

//console.log(Number.MAX_VALUE);

//+++++++++++++++++++++MATHS++++++++++++++++++++++++
// console.log(Math);//object 

// console.log(Math.abs(-4));
// console.log(Math.round(4.3));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.2));//4

// console.log(Math.min(4,3,5,2));//2
// console.log(Math.max(4,3,5,2));//5

console.log(Math.random());//gives number between 0-1
console.log((Math.random()) + 1);//gives value between 1-10

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1) +min));





