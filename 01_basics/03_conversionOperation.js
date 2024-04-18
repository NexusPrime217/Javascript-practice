let score="33abc"
let score2=null
let score3=undefined
let score4=true

// console.log(typeof score)
// console.log(typeof(score2))
// console.log(typeof(score3))
// console.log(typeof(score4))

let valueInNumber=Number(score)
let valueInNumber2=Number(score2)
let valueInNumber3=Number(score3)
let valueInNumber4=Number(score4)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)//Will give NaN 
// console.log(valueInNumber2)//Will give 0 
// console.log(valueInNumber3)//Will give NaN
// console.log(valueInNumber4)//Will give 1 for true and 0 for false

/* "33"->33
    "33abc"->NaN
    true->1 false->0
*/

let isLoggedIn="faf"
let booleanisLoggendIn=Boolean(isLoggedIn)
// console.log(booleanisLoggendIn)

//1->true 0->false
//""->false
//"Abhishek"->true

let someNumber=334
let someString=String(someNumber)
// console.log(someString)
// console.log(typeof someString)

//***********************Operations***************************

let value=3
let negValue=-value
//console.log(negValue)

let str1="hello"
let str2=" Abhishek"
let str3=str1+str2
// console.log(str3)

// console.log("1"+2);//12
// console.log("1"+2+2);//122
// console.log(1+"2");//12
// console.log(1+2+"2");//32

console.log(+true)
// console.log(+"")

let num1,num2,num3
num1=num2=num3=2 + 2

let GameCounter=100
++GameCounter
console.log(GameCounter++)






