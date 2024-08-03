// singleton- one of a kind- constructor
// if literal is used to make object then object is not singleton
//Object.create() constructor


//object literals
//key value pair

const mySym=Symbol("key1")  //symbol


const Jsuser={
    name:"Abhishek",
    [mySym]:"myKey1",                 //mySym:"myKey1"---->gives datatype as string not symbol
    age:22,
    location:"pune",
    email:"tulekarabhishek@gmail.com",
    isLoggedIn:false,
    lastLognDays:["monday",'saturday']
}
//console.log(Jsuser)
//accessing the element in object
// console.log(Jsuser.email)
// console.log(Jsuser["email"])

//typeof
let a=Jsuser[mySym]
console.log('type of a', typeof a)

Jsuser.email="tulekar@gmail.com"
//Object.freeze(Jsuser) // changes are not propogated
Jsuser.email="tulekara@gmail.com"
console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello Jsuser")
}
Jsuser.greetingTwo=function(){
    console.log(`Hello Jsuser, ${this.name} (${this.email})`) //string interpolation
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());







