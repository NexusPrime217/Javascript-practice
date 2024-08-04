const user={
    username:"abhishek",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to website`); //this means current context
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username='sam' //context changed
// user.welcomeMessage()
//console.log(this); in node current context is empty object
//but in browser the current/global object is window


// function chai(){
//     let username="hitesh"
//     console.log(this.username);//undefined
// }
// chai()

// const chai=function(){
    //let username="hitesh"
    //console.log(this.username);//undefined
// }
// chai()


//arrow function
const chai=()=>{
    let username="abhishek"
    // console.log(this);    //{}
    // console.log(this.username); //undefined    
}
chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2                //explicit return
// }
// const addTwo=(num1,num2)=> num1+num2   //implicit return
// const addTwo=(num1,num2)=> (num1+num2)   //implicit return
const addTwo=(num1,num2)=> ({username:'hitesh'})   //returning object

//console.log(addTwo(3,4));


//written in javascript
// const human = {
//     name: 'Sourabh',
//     age: 21,
//     // sayName: () => {
//     //   console.log(this. name);               -->Give undefined as arrow function is used
//     // }
//     // sayName: function(){
//     //   console.log(this. name);               -->Gives name as normal function is used
//     // }
//   };
// human.sayName

//arrow funtion cant be used as constructor but normal function can be used as constructor
// const Human=(name, age)=> {
//     this.name = name;
//     this.age = age;
//   }
  
   
//const sourabh = new Human('Sourabh', 21);
//console.log(sourabh.name); // Output: Sourabh

