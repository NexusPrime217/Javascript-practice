var c=300

let a=300
if (true){
    let a=10 //local
    const b=20//local
    var c=30//global---->it should not be global as it can cause ambiguity
    //for eg suppose the value was required to be 300 but someone used he same variable name in function and changed the value
    //it can cause undesired output.
}
//hencew mostly use let and const.
// console.log("GLOBAL",a);
// // console.log(b);
// console.log(c);

//nested scope
function one(){
    const username="abhishek"
    function two(){
        const website="youtube.com"
        console.log(username)
    }
    //console.log(website) ---> cant access website
    two()
}
one()

//++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){              //function
    return num+1
}

//addTwo(5)                       //throws error---->hoisting
const addTwo=function(num){       //expression
    return num+2
}

