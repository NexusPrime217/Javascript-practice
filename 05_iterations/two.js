// for of

// const arr=[1,2,3,4,5]

// for (const val of arr) {
//         console.log(val);
           
// }


// const greetings="Hello world"
// for (const greet of greetings){
//     console.log((`Each char is ${greet}`));
    
// }

const map=new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('US',"United states of america")

console.log(map);

for (const [key,value] of map){
    console.log(key,':-',value);
}

const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}

//Not correct way to iterate through object
// for (const [key,value] of myObject){
//     console.log(key,':-',value);
// }