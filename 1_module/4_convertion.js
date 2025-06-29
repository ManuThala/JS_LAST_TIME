let score = "35ab";

// console.log(typeof score); // number

let valInNumber = Number(score);
// console.log(typeof valInNumber); // number
// console.log(valInNumber); // number

// '33' =>  33
// '33abc' => NaN
// true => 1
// false => 0

let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn); // true

// 1 => true
// 0 => false
// '' => false
// 'abc' => true

let someNumber = 33;
let stringNumber = String;
// console.log(stringNumber); // '33'

/****************** operations****************/

let value = 3;
let negValue = -value;
// console.log(negValue); // -3

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 3); // 2^3 = 8
// console.log(2 % 3); // 2

let str1 = "hello";
let str2 = "world";

let str3 = str1 + " " + str2;
// console.log(str3); // hello world

// console.log("1" + 1); // 11
// console.log(1 + "1"); // 11
// console.log("1" + 1 + 1); // 111
// console.log(1 + 1 + "1"); // 21

// console.log(true + true); // 2
// console.log(true + false); // 1
// console.log(false + false); // 0
// console.log(true + 1); // 2
// console.log(false + 1); // 1
// console.log(true + "1"); // true1
// console.log("1" + true); // 1true
// console.log("1" + false); // 1false

let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // 101

// study postfix and prefix in mdn docs
