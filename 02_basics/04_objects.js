const tinderUser=new Object() //singleton object

tinderUser.id='123abc'
tinderUser.name='sam'
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"abhishek",
            lastname:"Tulekar"
        }
    },
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

// const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
//console.log(obj1);

//console.log(obj3);

//spread operator
const obj3={...obj1,...obj2}
//console.log(obj3);

//data from database
const user=[
    {

    },
    {
        
    }
]

//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('name'));//true
console.log(tinderUser.hasOwnProperty('ida'));//false


