const coding=['js','ruby','cpp','python']

//forEach
// coding.forEach( function(val){ //callback function
//     console.log(val);
// })
// coding.forEach((val)=>{
//     console.log(val);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //pass only reference do not call

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);  
// })

const myCoding=[
    {
        langName:"javascript",
        langFileName:"js"
    },
    {
        langName:"java",
        langFileName:"java"
    },
    {
        langName:"python",
        langFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.langName,item.langFileName);
    
})