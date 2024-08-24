function SetUsername(username){
    //complex DB calls
    this.username=username
    console.log("called"); 
}

function createUser(username,email,password){
    // SetUsername(username) //this wont work as the function is not called
    // SetUsername.call(username) //this wont work as well as the execution context is diferent and deleted when call is done 
    SetUsername.call(this,username) //this means use context of current function execution context
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@fb.com","123")

console.log(chai);
