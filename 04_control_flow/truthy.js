// const userEmail="fdasb@gmail.com"

// if (userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Didn't get email")
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//how to detect empty object
// const EmptyObj={}
// if (Object.keys(EmptyObj).length===0){
//     console.log("Object is empty");
// }

//nullish coalescing operator(??):null undefined

// let val1;
// val1=5??10 //5
// val1=null??10 //10
// val1=undefined??15

// console.log(val1)

//ternary operator
//condition?true:false
const iceTeaprice=100
iceTeaprice<=80?console.log("less than 80"):console.log("greater than 80");

