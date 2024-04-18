const myArr = [0, 1, 2, 3, 4, 5];
const myHeros=["a","b","c"]
const myArr2=new Array(1,2,3,4,5)
//console.log(myArr[1]);

//Array methods
myArr.push(6)
myArr.push(7)
//console.log(myArr);
myArr.pop()
// console.log(myArr);

myArr.unshift(9) //add element at the start
//console.log(myArr);
myArr.shift() //removes the start element
// console.log(myArr);

// console.log(myArr.includes(9)); //true/false
// console.log(myArr.indexOf(9)) //-1 if not present
// console.log(myArr[-5]);

const newArr=myArr.join()
// console.log(newArr) //joins and convert to string
// console.log(typeof newArr) //string

//slice,splice

//console.log("A ",myArr);

const myn1=myArr.slice(1,3) //1 to 3 where 3 not included

// console.log(myn1);

// console.log("B ",myArr);

const myn2=myArr.splice(1,3) //original array is also manipulateds

// console.log("C ",myArr);

// console.log(myn2);



