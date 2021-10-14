// printing statements in the browser console
// to run this, we need a console/terminal/command prompt
console.log("Hello World!");

// 3 ways to create variables --> let, var, const
let color = 'blue';
var size = 'medium';                // not recommended - has wider scope than let
const language = 'JavaScript';      // cannot change this variable value later
// language = 'Java';   --> causes TypeError: Assignment to constant variable.

// Variable types
// Number types         --> integers/floating-point numbers, there is no distinction
let quantity = 5;
let distance = 4.5;
// Strings              --> can be written in single/double quotes
let text = 'Hello World!';
let message = "Welcome!"

console.log('There are ' + quantity + ' programmers.');

// Practice
let todayTemp = 67;
console.log("Today's temperature is " + todayTemp + "F.");

// converting todayTemp in celsius
let tempC = (todayTemp - 32) * 5 / 9;
console.log("Today's temperature is " + tempC.toFixed(2) + "C.");

// template string
console.log(`Today's temperature is ${tempC.toFixed(2)}C which is ${todayTemp}F.`);


// Practice - template strings
let className = 'Web Programming';
let classCode = 2560;
let department = 'ITEC';

console.log(`This class is ${department} ${classCode} ${className}.`);