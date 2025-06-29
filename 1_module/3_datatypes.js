"use strict"; // treat all js code as newer version

// alert(3 + 3);   we are using nodejs not browser

console.log(3 + 3);
console.log("manu");

let name = "Manu";
let age = 30;
let isLoggedIn = true;
let state = null;

// number       ranges from -2^53 to 2^53
// bigint
// string       ranges from "" to 2^53
// boolean      true/false
// null         empty value
// undefined
// symbol
// object

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof state); // object (this is a bug in JavaScript, null is actually a primitive value)
console.log(typeof null); // object
console.log(typeof undefined); // undefined
