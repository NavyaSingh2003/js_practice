
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers   //aise hi kitne bhi .map lagakr chaining kr skte h and hn jo niche vale map ko data milega vo original jo hmne array m dia h vo nhi hoga but uske upar vale map ka result hoga 
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
