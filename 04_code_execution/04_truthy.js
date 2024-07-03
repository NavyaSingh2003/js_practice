const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values :
// false, 0, -0, BigInt 0n, "" -> empty string, null, undefined, NaN

//truthy values :
// "0", 'false', " ", [] -> empty array, {} -> empty object, function(){} -> empty function

// Q) tell output : all will give 'true' as output
// false == ''
// false == 0
// 0 == ''

// if (userEmail.length === 0) {  //can chk length of array or emptyness
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {    //can chk length of object or emptyness
    console.log("Object is empty");
}


/* Nullish Coalescing Operator (??): null undefined    */
// this operator is used usually when 3rd party se output aata h nd hme nhi pata ki usme koi error h ya nhi toh koi value aaygi bhi ya ni   
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20   //agr null nhi h toh uske baad jo likhi h vhi aajaygi value i.e yhn 10 aaygi
console.log(val1);


/* Terniary Operator */
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")