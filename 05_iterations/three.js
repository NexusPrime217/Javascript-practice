const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"Ruby"
}

//forin loop gives keys
for (const key in myObject){
    console.log(key);   
    console.log(myObject[key]);
}

const arr=[1,2,3,4,5]

for (const i in arr){
    console.log(i); //index are key
    console.log(arr[i]);
}

const map=new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('US',"United states of america")

for (const i in map){
    console.log(i); //prints nothing as map is not iterable.
}