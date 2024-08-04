//Immediately Invoked Function Expression(IIFE)
//used to avoid polution from global scope



//normally
// function chai(){
//     console.log("DB connected");    
// }
// chai()

//IIFE--->wrap in parenthesis and add calling parenthesis     body------>()()<-------------Execution
(function chai(){
    //named IIFE
    console.log("DB CONNECTED");
})();  //<-----for IIFE termination is required as it does not know where to terminate

((name)=>{
    console.log(`DB CONNECTED Two ${name}`);
})("abhishek");


