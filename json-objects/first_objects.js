// create an object - contains properties
// properties are name: value pairs
let user = {
  username: "zoe",
  password: "zebra",
};
console.log(user); // { username: 'zoe', password: 'zebra' }

console.log();

// reading object data with dot notation
console.log("Reading object data with dot notation: ");
console.log(user.username); // zoe
console.log(user.password); // zebra

console.log();

// reading object data with square bracket notation
console.log("Reading object data with [] notation: ");
console.log(user["username"]); // zoe
console.log(user["password"]); // zebra

console.log();

// dot notation is used more often
// [] notation is used usually with variables
console.log("Reading object data with [] notation using variables: ");
let whatProperty = "password";
console.log(user[whatProperty]); // zebra

let usernameProperty = "username";
console.log(user[usernameProperty]); // zoe

console.log();

// 2 approaches to changing data in an object: dot notation & [] notation
user.password = "elephant";
console.log(user); // { username: 'zoe', password: 'elephant' }

user["password"] = "alligator";
console.log(user); // { username: 'zoe', password: 'alligator' }

console.log();

// adding new properties to objects
user.email = "abc@gmail.com";

console.log(user); // { username: 'zoe', password: 'alligator', email: 'abc@gmail.com' }
console.log(user.email); // abc@gmail.com
console.log(user["email"]); // abc@gmail.com

console.log();

// looping over an object with for...in...
for (let name in user) {
  console.log(name, user[name]);
}
