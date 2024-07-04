
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {   //'reduce' method m hmko 'accumulator' pass krna hi hota h as argument(can't skip that)
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)  //ye 'accumulator' ki initial value h jo hm passs krna chahte h 

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

//basically isko toatal sum ya price nikalne m use krte h 
