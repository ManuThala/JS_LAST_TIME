// let is a block-scoped variable and can be reassigned and updated

// const is a block-scoped constant and cannot be reassigned and updated

// var is a function-scoped variable and can be reassigned and updated

const accountId = 144;
let accountEmail = "manulsmanu7@gmail.com";
var accountPassword = "12345678";
accountCity = "Tumkur";
let accountState;

// accountId = 234;
console.log(accountId); // This will throw an error because accountId is a constant

accountEmail = "harsha7@gmail.com";
accountPassword = "987654321";
accountCity = "Bangalore";

// This will print the updated email and This will print the updated password and This will print the updated city

console.log(accountEmail, accountPassword, accountCity, accountState);

console.log(typeof accountCity); //string  type
console.log(typeof accountState); //undefined type

console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
]); // This will print the table with the values of the variables
