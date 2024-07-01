// Q) what is scope ? 
// ans: basically in layman lang 'scope' is curly braces associated with functions, if, else (not talking about object ke curly braces)
// Q) this concept of 'scope' came into picture becz of problem associated with 'var'
// Q) Note that 'global scope' is different in 'browser' and in 'node coding environment(vs code)'

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
// one()  //executing function


 
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
//this concept is caled 'hoisting'
//1) declaration se pehle access krskte h agr aise declaration krege func ki
console.log(addone(5))

function addone(num){
    return num + 1
}


//1) declaration se pehle access 'nhi' krskte h agr aise declaration krege func ki
addTwo(5)
const addTwo = function(num){
    return num + 2
}