// We will study how execution of code takes place in JS
// "Global execution context" (GEC) is essential in code execution process. It works somewhat diff for browser, node env., deno etc. 
// 'GEC' is allocated in a variable 'this' whose value is 'window object' in case of 'browser'. 


//Q) Let's take an example to demonstrate how execution of code snippet takes place : 

// 1) var val1 = 10
// 2) var val2 = 5
// 3) function addnum(num1 , num2){
// 4)     let total = num1 + num2
// 5)     return total
// 6) }
// 7) var result1 = addnum(val1, val2)
// 8) var result2 = addnum(10, 2)

// Sol)
// step1 : Global Execution Context
// step2 : Memory creation phase (val1 = undefined, val2 = undefined, addnum = undefined, result1 = undefined, result2 = undefined)
// step3 : Execution phase (val1 = 10, val2 = 2, addnum = (separate memory creation nd execution phase will take place), result1 = 15, result2 = 12)
// NOTE: for every 'function' present in code, memory creation and execution phase will take place separately similar to global context 

// Q) what will happen when more than 1 function come into the call stack like function ke andr hi do aur func hai in code ?
// sol) 'LIFO' will be followed i.e jo last m aaya vo sbse pehle execute hoga
