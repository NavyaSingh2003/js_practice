// Dates

let myDate = new Date()  //date ka object(instance)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(typeof myDate);    //ques interview

// let myCreatedDate = new Date(2023, 0, 23)  //month start from 0 index
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")  //jb string date dege toh month 1 index sehi start hoga
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  //timestamp tb use hota h jb hme real life m 'quizes' aur 'polls' krane hote h aur fastest ko winner bnanaa h 

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  //here date is in milliseconds
// console.log(Math.floor(Date.now()/1000));  //if want to convert date into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {  //we can customize the 'date' like this 
    weekday: "long",
    
})