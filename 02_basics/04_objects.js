/* singleton objects -> constructor k thru jb object bnate hain */

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }   // aise obj3 k andar obj1, obj2 as element aajayge like array
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //isme target hmne {} object lelia h and usme dalrhe h source objects like obj1, obj2, obj3

const obj3 = {...obj1, ...obj2} //yhn 'spread' operator ko use kia h -> first spread all ele of all listed objects then combine in one single object (here obj3)
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email   //'.' use kia kyuki object h array ke andar ka ele
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //will get an 'array' of keys jinpe loop lagake kahi bhi use krskte h
// console.log(Object.values(tinderUser));  //same with values -> array milega inka bhi
// console.log(Object.entries(tinderUser));  //here har key-value pair ko array m convert krke ek array return hoga

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor  //aise bar-bar likhna will be hactic so other way is given below

const {courseInstructor: instructor} = course  //'destructuring' of object matlab {} braces use krke 'courseInstructor' ki jagah 'instructor' bhi use krskte h ya phir aur bhi koi small name acc. to our convenience use krskte h
// console.log(courseInstructor);
console.log(instructor);

/* APIs ka format can be similar to 'object' or 'arrays' so we can simply operate them accordingly since we hv learnt both arrays nd objects */
/* well we say that APIs are in 'JSON' format and this format is applicable everywhere like rubyonrails etc on internet */ 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]