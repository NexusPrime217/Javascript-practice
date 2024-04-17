let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());

console.log(typeof myDate);

let myCreateddate=new Date(2024,0,2);//yyyy mm dd month starts with zero.
console.log(myCreateddate.toDateString());

let newDate=new Date("2024-01-02")
console.log(newDate.toLocaleString());

let newDate2=new Date("01-02-2024")
console.log(newDate2.toLocaleString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreateddate.getTime());

console.log(Math.floor(Date.now()/1000));

let newdate=new Date()
console.log(newdate.getMinutes())
console.log(newdate.getMonth()+1)

console.log(newdate.toLocaleString('default',{
    weekday:'long'
}));