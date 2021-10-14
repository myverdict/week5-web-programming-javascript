// pre-requisites for Android programming - C# or Java

let takenCSharp = false;
let takenJava = false;

if (takenCSharp || takenJava) {
    console.log('You meet the pre-requisites for Android.');
}
else {
    console.log('You must take C# or Java.');
}


// Practice: To be a senator, there are 3 requirements
// 1. You must be at least 30 years old
// 2. You have to be a US citizen for 9 or more years
// 3. You must live in the state you want to represent

let age = 40;                               // in years
let usCitizenTime = 5;                     // in years
let stateOfResidence = 'Wisconsin';
let stateWantToRepresent = 'Wisconsin';

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence == stateWantToRepresent) {
    console.log('You are eligible to be a senator.');
}
else {
    console.log('Sorry, you are not eligible.');
}


// falsy values - undefined, null, empty lists, empty objects, 0, false
// test with '', undefined, null, [], {}, false
// test with == and ===
if ('' == 0) {
    console.log('the same!');
}
else {
    console.log('not the same!');
}
