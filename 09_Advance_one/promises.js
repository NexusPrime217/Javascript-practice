// //Promise creation-way 1
// const promise1=new Promise(function(resolve,reject){
//     //Do a async task
//     setTimeout(() => {
//         console.log("Async task done");
//         resolve()
//     }, 1000);
    
// })

// promise1.then(()=>{
//     console.log("Promise consumed")
// })

// //way-2
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task 2 done");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("Promise 2 consumed");
// })

// //send data using resolve
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({
//             username:"Abhishek",
//             email:"abhishekt@gmail.com"
//         }) //sending a object
//     },1000)
// })

// promise3.then((user)=>{
//     console.log(user);
//     console.log(user.username);
//     console.log(user.email);
// })

// //resolve,reject,then,catch,finally
// const promise4=new Promise((resolve,reject)=>{
//     let error=true;
//     if (!error){
//         resolve({username:"Abhi",password:123})
//     }
//     else{
//         reject('ERROR! Something Went wrong')
//     }
// })

// promise4
// .then((user)=>{
//     console.log(user);//resolve
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);//reject
// })
// .finally(()=> console.log('The promise is either resolved or rejected')) //executed either way

// //async,await,try,catch
// const promise5=new Promise((resolve,reject)=>{
//     let error=false
//     if (!error){
//         resolve({Username:'JS', Passwaord:123})
//     }
//     else{
//         reject("Something went wrong with JS")
//     }
// })

// async function promise5consumed(){
//     try {
//         const response= await promise5
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// promise5consumed()

////fetching API from github

//way1:async await
// async function getUserData(){
//     try {
//         const response=await fetch('https://api.github.com/users/hiteshchoudhary') //await till data is fetched
//         const data=await response.json() //await till response is converted to json format
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getUserData()

//way2: fetch return promise object, so then catch can be used 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    // console.log(response);
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log('ERROR',error);
})