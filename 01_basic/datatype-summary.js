//primitive and non primitive


//Primitive

// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt
const score=100
const scoreValue=100.3

const isLoggedIn=true
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

//console.log(id==anotherId);

const bigNumber=34278345125445n //add n in the end


//Reference (Non Primitive)

//Array,Objects, functions

const heros=["Shaktiman","Naagraj","doga"]

let myObj={
    name:"abhishek",
    age: 22
}

const myFunction=function(){
    console.log("Hello world");
}

//console.log(typeof myFunction) //return function which is object function.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive), heap(Non- primitive)
let myYoutubename="abhishek";//stack

let anothername=myYoutubename// copy of myYoutube name is provided not the variable
anothername="abhishektulekar"// as copy is provided no change in original variable

// console.log(myYoutubename);
// console.log(anothername);

//heap
let userOne={
    email:"user@google.com",
    ipi:"user@ybl"
}
//always a reference to the heap is provided 
let userTwo=userOne;
//If value at user2 is changed the value at user one is also change as both user1 and user2 
//are pointing at same value in heap
userTwo.email="user2@google.com"

console.log(userOne.email)
console.log(userTwo.email)




