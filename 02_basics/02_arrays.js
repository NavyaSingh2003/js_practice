const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   //array in js m koi bhi datatype store krskte h even it can store another array too 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros)   //'concat' returns a new array by concatenating 2 arrays 
// console.log(allHeros);

//'spread' is preferred over 'concat' bcz we can give more than one array as argument at a time to combine unlike 'concat'
const all_new_heros = [...marvel_heros, ...dc_heros]  
// console.log(all_new_heros);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // jb array k andr array ho, aise hi kaafi nesting ho then we can flat the array via this method
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))  //will make array of characters of "hitesh"
console.log(Array.from({name: "hitesh"})) // interesting for interview -> will get confuse ki key(name) ka array banana h ya value(hitesh) ka hence will return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));