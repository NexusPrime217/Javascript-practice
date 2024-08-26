// Math.PI=Math.ceil(Math.PI)
// console.log(Math)

// Object.getOwnPropertyDescriptor(Math,'PI')

const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptors(chai));

Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false
})

// console.log(Object.getOwnPropertyDescriptors(chai));

for (const [key,value] of Object.entries(chai)) {
    console.log(`${key}:${value}`);
    
}