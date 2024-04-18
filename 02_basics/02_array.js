const marvel_heros=["thor","ironman",'spiderman']
const dc_heros=["superman","batman","flash"]

//marvel_heros.push(dc_heros) //adds the entire array as single element in marvel_heros

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);
// const allHeros=marvel_heros.concat(dc_heros) //gives new array containing value of  both the arrays each as single element
// console.log(allHeros);

const new_heros=[...marvel_heros,...dc_heros] //spread operation
console.log(new_heros);

let another_array=[1 ,2 ,3, [4,5,6],[7,[4,5]]]
let useable_another_array=another_array.flat(Infinity)
// console.log(useable_another_array);
useable_another_array=another_array.flat(1)
// console.log(useable_another_array);

console.log(Array.isArray("abhishek"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"abhishek"})); //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));