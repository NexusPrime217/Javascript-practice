// let myName="hitesh   "
// let mychannel='chai   '

// console.log(myName.length);

// let myHeros=["thor","spiderman"]

// let heroPower={
//     thir:"hammer",
//     spiderman:"sling",

//     getSpiderPower:function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh=function(){
//     console.log(`hitesh is present in all objects`);
// }
// // heroPower.hitesh()
// myHeros.hitesh()

// Array.prototype.abhishek=function(){
//     console.log(`Hey Abhishek`);
// }
// myHeros.abhishek()

//inheritance

const User={
    name:'chai',
    email:'chai@google.com'
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User

console.log(Teacher.name)

//modern syntax
Object.setPrototypeOf(Teacher,TeachingSupport)

let anotherUsername="ChaiAurCode   "
String.prototype.trueLength=function(){
    return this.trim().length
}

console.log(anotherUsername.trueLength())