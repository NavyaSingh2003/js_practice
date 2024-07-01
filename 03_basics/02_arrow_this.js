/* 'this' means jo current context h usme vo value h vo batao*/

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"  //yhn context change hogya
// user.welcomeMessage()

// console.log(this);    // will give 'empty object' bcz abhi current context empty h bcz global k andar koi context hi nhi h -> this happens in 'node' env.
                         // will give 'window object' in browser bcz in browser global object is window object


/* can't use 'this' inside function but can use them */
// function chai(){
//     let username = "hitesh"
//     console.log(this);  //this will give some output related to global scope nd all
//     console.log(this.username);  //this won't give any output and will give 'undefined' means 'this' like this can't be used inside functions
// }
// chai()


const chai =  () => {
    let username = "hitesh"
    console.log(this);      //this will give '{}' in arrow function unlike simple function
//  console.log(this.username);    //this won't give any output and will give 'undefined' means 'this' like this can't be used inside functions
}
// chai()


/* arrow function -> explicit 'return' */
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

/* arrow function -> implicit 'return' */
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// TAKE AWAY is ki '{}' ke sath 'return' likhna pdega but '()' ke sath nhi likhna pdega arrow func. m

const addTwo = (num1, num2) => ({username: "hitesh"})   //arrow func. ko 'object' return krna h toh aise '()' isme enclose krna pdega


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()