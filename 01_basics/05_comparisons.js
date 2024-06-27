/* np when lhs nd rhs has same datatype */

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


/* problem arise when we compare 2 diff datatypes */

// console.log("2" > 1);
// console.log("02" > 1);


/* equality chk(==) and comparisons (>, <, >=, <=) work differently
   'comparisons' convert null to a number, treatimg it as 0. that's why null >= 0 is true while null > 0 is false
*/

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);


/* strict chk -> chks value along with datatype */
console.log("2" === 2);



/* NOTE: try to avoid comparisons with diff datatypes on lhs nd rhs*/