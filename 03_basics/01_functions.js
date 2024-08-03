function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}
// sayMyName //reference
// sayMyName()//execution

function addTwoNumbers(number1,number2){//parameter
    return number1+number2
    // console.log(number1+number2);
}
//console.log(typeof 3);
// if (typeof 3 =='string') console.log("true")
addTwoNumbers("abc",4) //arguments

const result=addTwoNumbers(3,5)
///console.log(`result=${result}`);

function loginUserMessage(username="sam"){//default value
    if (username==undefined){
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("abhi"));
console.log(loginUserMessage()); //undefined just logged in<-----without if statement




