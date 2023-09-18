/**
 * Checks if GPA is within the range 0 and 4.
 * @param gpa GPA value
 * @return {boolean} true if GPA is within the range 0 and 4, false otherwise.
 */
// VERSION 1 - if-else clause
// function validGPA(gpa) {
//   if (gpa >= 0 && gpa <= 4) {
//     return true; // end of function
//   } else {
//     return false; // or end of function
//   }
// }

// VERSION 2 - only if clause
// function validGPA(gpa) {
//   if (gpa >= 0 && gpa <= 4) {
//     return true; // end of function
//   }
//   return false; // or end of function
// }

// VERSION 3 - concise version without if or if-else clause
function validGPA(gpa) {
  return gpa >= 0 && gpa <= 4;
}

// function call
console.log(validGPA(-3)); // false
console.log(validGPA(4.1)); // false
console.log(validGPA(2.5)); // true
console.log(validGPA(4)); // true
