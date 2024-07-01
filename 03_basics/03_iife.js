// Immediately Invoked Function Expressions (IIFE)
// Q) why we use IIFE ??
// ans) 1) to immediately execute a function 
//      2) many a times, problem is invoked due to pollution of 'global scope' like its variables and declarations so in order to get rid of that polution we use 'IIFE'.


// named IIFE (chai h func ka naam)
(function chai(){
    console.log(`DB CONNECTED`);
})();    //here hmne aise nhi call kia chai() bcz hme IIFE ko use krke immediately execute krana tha func


// unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')  //aise parameters pass krskte  h IIFE k case m

// Q) if we hv to write 2 IIFE's together then we are supposed to put a semicolon after the first o/w vo confuse hojayga second vale k execution m ki kis context ki baat krhe h 