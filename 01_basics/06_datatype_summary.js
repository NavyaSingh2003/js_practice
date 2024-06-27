/* there are 2 datatypes(primitive, non-primitive) in js on the basis how they are stored in memory and how they are accessed */

/* PRIMITIVE -> inka memory address nhi dia jata instead inki copy of value is given like call by value */
// 7 types -> String, Number, Boolean, null - empty, undefined - memory allocated but value not defined yet, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //same as let userEmail = undefined;

const id = Symbol('123')  //'symbol' represents a unique identifier and can be used in various ways. Symbols are used to create object properties
const anotherId = Symbol('123')

console.log(id === anotherId);  //will give false 
// const bigNumber = 3456543576654356754n



/* Non-primitive -> Reference */
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  //array

let myObj = {  //object
    name: "hitesh",
    age: 22,

}

const myFunction = function(){  //function
    console.log("Hello world");
}

console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3 -> datatype

/* 'typeof' use krke agr datatype pta kre then ye type aata h -> interview ques isko rechk krke pdhna*/
// Type of val        Result
// Undefined     ->  "undefined"
// Null          ->  "object"
// Boolean       ->  "boolean"
// Number        ->  "number"
// String        ->  "string"

// Object        ->  "object"
// Object        ->  "function"
// function      ->  "objectfunction"


//Q) kyuki js m hm kbhi bhi datatype nhi likhte variable declare krte tym
// JavaScript is a dynamically typed language,
//  which means that data types of variables are 
//  determined by the value they hold at runtime 
//  and can change throughout the program as we 
//  assign different values to them.