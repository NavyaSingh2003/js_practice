// singleton -> 'constructor' se jb 'object' bnta h toh hmesha 'singleton' hota h but 'literal' se singleton nhi hota
// Object.create -> aise constructor se jb object bnate h toh likhte h


// object literals
const mySym = Symbol("key1")  //q) ek symbol lo usko object ki keys m add kro aur mujhe print krke dikha do 


const JsUser = {   //object has key-value pairs
    name: "Hitesh",  //'key' is bydefault string type
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  //correct syntax of using 'symbol' as a key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

/* Take away is ki kbhi kbhi hm 'dot' lagake nhi access krskte object ke items ko, we hv to follow some other way like in case of symbol*/
// console.log(JsUser.name)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  //"full name" ko dot se access nhi krskte kyuki '.' m string form m key nhi li jati
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  //if we want ki aage koi bhi object ki value ko manipulate nhi kre
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //'backticks' use krke string ko likhna is known as 'String Interpolation'
}   //'this' is used for current object

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());