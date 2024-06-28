// features of arrays in JS :
// 1) array can contain multiple datatypes
// 2) arrays are 'resizeable' means size not fixed
// 3) arrays in JS create 'shallow copies' of an object  -> interview
// 4) diff b/w shallow(jo bhi change krege vo original array m bhi hoga) and deep copies(original array m change nhi hoga) ?
// ans) a 'shallow copy' of an object is a copy whose properties share the same 
// references (point to the same underlying values) as those of the source object from which the copy was made.
// 'deep copy' of an object is a copy whose properties donot share the same references(point to the same underlying values) 
// as those of the source object from which the copy was made. 


// array methods and properties

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  //starting m add krdega ele ko i.e ek ek shift krega har ele ko jo array m h. Ye small data k liye thk h lekin 'large values' k liye will consume lot of space nd memory hence this is not preferred
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  //'join' converts array into string type 
// console.log(typeof newArr); //string

// console.log(myArr);
// console.log( newArr);


// slice(returns section of array and it will not manipulate original array), splice(returns section of array and it 'will manipulate original array')-> interview

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //isme 1,2 index include hoge but 3 index nhi hoga
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //isme 1,2,3 index include hoge 
console.log(myn2);
console.log("C ", myArr);
