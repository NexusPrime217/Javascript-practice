// //Object literal
// const user={
//     username:'hitesh',
//     logincount:8,
//     isLoggedIn:true,

//     getUserDetails:function(){
//         console.log("Got user details from database");
//         console.log(`${this.username}`);
        
//     }
// }
// console.log(user);
// console.log(user.getUserDetails());


//constructor function
function user(username,loginCount,IsLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.IsLoggedIn=IsLoggedIn
    // return this <----------implicitly returned when new keyword is used
}
//new keyword creates new instance
const User1=new user('abhi',8,true)
const User2=new user('abhi2',10,false)
console.log(User1);
console.log(User2);

