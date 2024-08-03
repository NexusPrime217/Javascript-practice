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
// console.log(loginUserMessage()); //undefined just logged in<-----without if statement


//rest operator
function calculateCartPrice(...num1){ //looks same as spread operator but they differ based on execution
    return num1
}

// console.log(calculateCartPrice(300,400,500));

function calculateCartPriceTwo(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPriceTwo(300,400,200,5000,400)); //here 300 and 400 is given to val1 and val2 so num1 will have 200 5000 400

const user={
    username:'hitesh',
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
// handleObject({
//     username:"sam",
//     price:399
// })




