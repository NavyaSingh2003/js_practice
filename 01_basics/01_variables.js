const accountId = 144553    //const, var, let keyword dekhte hi memory assign hojati h
let accountEmail = "navya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"     //js m memory bina const, let, var likhe bhi assign hojati h but this is worst way so don't do this
let accountState;  //its value not defined

// accountId = 2     // not allowed becoz 'const' type

accountEmail = "ns@ns.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

//bar-bar console.log likhne se badia ki ekhi sath sare variable likhkar dekhlo by using below code : 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use 'var' bcoz of issue in block scope and function scope
*/
