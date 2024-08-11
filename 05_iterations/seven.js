//reduce
const myArr=[1,2,3,4,5,6]

initial_value=10
const sum=myArr.reduce(
    (accumulator,currentValue)=> accumulator+currentValue,initial_value
)

console.log(sum);

const newArr=[1,2,3,4]
const ans2=newArr.reduce( (acc,curr) => (acc+curr),0)
console.log(ans2);


const ShoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:1499
    },
    {
        itemName:"MERN course",
        price:4999
    },
    {
        itemName:"Cloud course",
        price:299
    }
]

const GrandTotal=ShoppingCart.reduce( (acc,item) => (acc+item.price),0)
console.log(GrandTotal);
