// https://gist.github.com/claraj/b854efe2c2f33e621f46fea0a80df251
// https://git.io/JvXZT

// More examples https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

// filter & map operate on arrays

// MAPPING
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
console.log('MAPPING:');
console.log('Mapping creates a new array from the elements of an existing array; the new array may also include different data types');
console.log('-------------------------------------------------\n');

// an array of cat names
let cats = ['Hello Kitty', 'Maru', 'Garfield', 'Soymilk', 'Miles', 'Meridith'];

console.log('Original array of cat names:');
console.log(cats);

// METHOD 1: Function version
// creating a new array built from elements of an existing array 
// the original 'cats' array is not modified
let uppercaseCats = cats.map( function(cat) {
    return cat.toUpperCase();
})

console.log('\nMETHOD 1: Function version');
console.log('UPPERCASE new array of cat names:');
console.log(uppercaseCats);


// METHOD 2: ARROW NOTATION - FULL VERSION (omit the word 'function')
// Alternate way of writing the above code
let uppercaseCats2 = cats.map( (cat) => {
    return cat.toUpperCase();
})

console.log('\nMETHOD 2: Arrow notation (=>) full version (omit the word "function")');
console.log('UPPERCASE new array of cat names:');
console.log(uppercaseCats2);


// METHOD 3: ARROW NOTATION - SHORT VERSION (omit (), {} & the return statement)
// more concise - one line, one argument, can omit () and {}. Return statement is implied. 
let uppercaseCats3 = cats.map( cat => cat.toUpperCase() );

console.log('\nMETHOD 3: Arrow notation (=>) short version (omit () and {})');
console.log('UPPERCASE new array of cat names:');
console.log(uppercaseCats3);

console.log('\nUnmodified original array of cat names:');
console.log(cats);

console.log('\n-------------------------------------------------');



// METHOD 1: Function version
// when using map - you can return different types of data
// creating a new array of cat names length
let catNameLengths = cats.map( function(cat) {
    return cat.length;
})

console.log('\nMethod 1: Function version');
console.log('Returning a new array of lengths of cat names: ');
console.log(catNameLengths);


// METHOD 2: ARROW NOTATION - FULL VERSION (omit the word 'function')
// Alternate way of writing the above code
let catNameLengths2 = cats.map( (cat) => {
    return cat.length;
})

console.log('\nMETHOD 2: Arrow notation (=>) full version (omit the word "function")');
console.log('Returning a new array of lengths of cat names: ');
console.log(catNameLengths2);


// METHOD 3: ARROW NOTATION - SHORT VERSION (omit (), {} & the return statement)
// more concise - one line, one argument, can omit () and {}. Return statement is implied. 
let catNameLengths3 = cats.map( cat => cat.length )

console.log('\nMETHOD 3: Arrow notation (=>) short version (omit () and {})');
console.log('Returning a new array of lengths of cat names: ');
console.log(catNameLengths3);


// Compare to the imperative method...
// METHOD 4: IMPERATIVE METHOD USING forEach()
let catNameLengths4 = [];           // create an empty array
cats.forEach( function(cat) {
    // add each length value to the end of the array
    catNameLengths4.push(cat.length);   
})

console.log('\nMETHOD 4: IMPERATIVE WAY USING forEach()');
console.log('Returning a new array of lengths of cat names: ');
console.log(catNameLengths4);


// METHOD 5: USING for LOOPS
let catNamesLengths5 = [];          // create an empty array
for (let i = 0; i < cats.length; i++) {
    // add each length value to the end of the array
    catNamesLengths5.push(cats[i].length);
}

console.log('\nMETHOD 5: USING for LOOPS');
console.log('Returning a new array of lengths of cat names: ');
console.log(catNamesLengths5);

console.log('\n-------------------------------------------------');



// when using map - you can return different types of data
// creating a new array of the first character of each cat name
let firstLetters = cats.map( cat => cat[0] )

console.log('\nReturning a new array of the FIRST character of each cat name: ');
console.log(firstLetters);

// EXERCISE: Can you use map to create a new array with the 
// last letter of each cat's name? 
let lastLetters = cats.map( cat => cat[cat.length - 1] )

console.log('\nReturning a new array of the LAST character of each cat name: ');
console.log(lastLetters);

console.log('\n-------------------------------------------------');



// when using map - you can return different types of data
// returning an array of boolean values
// METHOD 1: Arrow notation (=>) full version (omit the word "function")
let startsWithM = cats.map( cat => {
    return (cat[0] === 'm' || cat[0] == 'M');
})

console.log('\nMETHOD 1: Arrow notation (=>) full version (omit the word "function")');
console.log('Returning an array of boolean values for cat names starting with "m": ');
console.log(startsWithM);


// METHOD 2: Arrow notation (=>) short version (omit () and {})
let startsWithM1 = cats.map( cat => (cat[0] === 'm' || cat[0] == 'M') )

console.log('\nMETHOD 2: Arrow notation (=>) short version (omit () and {})');
console.log('Returning an array of boolean values for cat names starting with "m": ');
console.log(startsWithM1);

console.log('\n-------------------------------------------------');



// Exercise: can you use map to create a new array of boolean values; 
//           whether a cat's name is longer than 6 letters or not. 
//           For the example, the array will be [ true, false, true, true, false, true]
let longCatNames = cats.map( cat => {
    if (cat.length > 6) {
        return true;
    }
    return false;
})

console.log('\nReturning an array of boolean values for cat names longer than 6 letters: ');
console.log(longCatNames);

console.log('\n-------------------------------------------------');



let quizScores = [ 90, 100, 79, 81, 100, 40, 92, 64 ];

console.log('\nOriginal array of quiz scores:');
console.log(quizScores);        // [ 90, 100, 79, 81, 100, 40, 92, 64 ] 

// FILTERING: Returning an array of scores >= 90
let aGrades = quizScores.filter( score => (score >= 90) )

console.log('\n1. FILTERING: Returning scores where score >= 90 for a new array of "A" grades')
console.log(aGrades);           // [ 90, 100, 100, 92 ]


// FILTERING: Returning an array of scores < 90
// alternate way of writing the above code
let nonAGrades = quizScores.filter( function(score) {
    return score < 90;
})

console.log('\n2. FILTERING: Returning scores where score < 90 for a new array of non "A" grades')
console.log(nonAGrades);           // [ 79, 81, 40, 64 ]


let letterGrades = quizScores.map( score => {
    if (score >= 90) { return 'A'; }
    if (score >= 80) { return 'B'; }
    if (score >= 70) { return 'C'; }
    if (score >= 60) { return 'D'; }
    return 'F';
})

// when using map - you can return different types of data
// returning a new array of letter grades
console.log('\nReturning a new array of letter grades: ');
console.log(letterGrades);      // [ 'A', 'A', 'C', 'B', 'A', 'F', 'A', 'D' ]


// when using map - you can return different types of data
// returning an array of objects - joining our scores and letter grades
// Starts with [ { score: 90, grade: 'A' } ... ]
let scoreAndLetterGrades = quizScores.map( score => {
    if (score >= 90) { return { score: score, grade: 'A' } }
    if (score >= 80) { return { score: score, grade: 'B' } }
    if (score >= 70) { return { score: score, grade: 'C' } }
    if (score >= 60) { return { score: score, grade: 'D' } }
    return { score: score, grade: 'F' }
})

console.log('\nReturning a new array of objects: ');
console.log(scoreAndLetterGrades);


// FILTERING on objects: returning a new array of 'A' grade objects
console.log('\n3. FILTERING on objects: ');

let aScoresAndGrade = scoreAndLetterGrades
    .filter( scoreInfo => scoreInfo.grade == 'A' )

console.log('\nVERSION 1: Returning objects of "A" score and grades');
console.log(aScoresAndGrade);


// FILTERING on objects: returning a new array of non 'A' grade objects
// alternate way of writing the above code
let nonAScoresAndGrade = scoreAndLetterGrades.filter( function(scoreInfo) {
    return scoreInfo.grade != 'A';
})

console.log('\nVERSION 2: Returning objects of non "A" score and grades');
console.log(nonAScoresAndGrade);


console.log('\n-------------------------------------------------');



// Note: shortcut assignment operator for objects.
let cat = 'Meridith';
let owner = 'Taylor Swift';

console.log('\nAssigning operators for objects: ');

// Shorthand version: Variable names become the keys 
let catAndOwner = { cat, owner }    

console.log('\nShorthand version: Variable names become the keys & values are implied');
console.log(catAndOwner);           // { cat: 'Meridith', owner: 'Taylor Swift' }

// Long version: Using variable names as keys & values
let catAndOwner1 = { cat: cat, owner: owner }

console.log('\nLong version: Using variable names as keys and values');
console.log(catAndOwner1);

console.log('\n-------------------------------------------------');



// Using that here
// Note: shortcut assignment operator for objects.
let scoreAndLetterGrades2 = quizScores.map(score => {
    let grade;
    if (score >= 90) { grade = 'A'; }
    else if (score >= 80) { grade = 'B'; }
    else if (score >= 70) { grade = 'C'; }
    else if (score >= 60) { grade = 'D'; }
    else { grade = 'F'; }
    return { score, grade }                 // shorthand version: returning an object
    // return { score: score, grade: grade }   // Long version: returning an object
})

console.log('\nShorthand version: Variable names become the keys & values are implied');
console.log(scoreAndLetterGrades2);

console.log('_________________________________________________');
console.log('_________________________________________________');



// SPREAD OPERATOR (...)
// more useful array/object shortcuts: the spread operator
// you can make new arrays and objects using the spread operator

// let cats = [ 'Hello Kitty', 'Maru', 'Garfield', 'Soymilk', 'Miles', 'Meridith' ];
let dogs = [ 'Einstein', 'Marley', 'Fly', 'Max', 'Scooby', 'Zero' ];

console.log('\nOriginal "cats" array: ');
console.log(cats);
console.log('\nOriginal "dogs" array: ');
console.log(dogs);

// An array of arrays
let pets = [ cats, dogs ];

console.log('\nAn array of arrays: 2-dimensional array with 2 array elements');
console.log(pets);      // [ [], [] ]

console.log('\n-------------------------------------------------');


console.log('\nSPREAD operator (...)');
console.log('A single dimensional array can be created by combining the elements of ' + 
            '1 array with the elements of another array; new elements can be added as extra regular strings: ');
console.log('-------------------------------------------------');
// using the spread operator to combine all the elements of 1 array with the elements of another array
let pets1 = [ ...dogs, ...cats ];

console.log('\n1. Combining all the elements of the "dogs" array with the elements of the "cats" array: ');
console.log(pets1);


// using the spread operator to duplicate 1 array
let pets2 = [ ...dogs, ...dogs ];

console.log('\n2. Duplicated elements combining all the elements of the "dogs" array with the elements of the "dogs" array again: ');
console.log(pets2);


// using the spread operator to add a new element as extra regular strings
let pets3 = [ ...dogs, ...cats, 'Kitty' ];    

console.log('\n3. Combining the "dogs" & the "cats" array; and adding a new element as extra regular strings: ');
console.log(pets3);

console.log('_________________________________________________');
console.log('_________________________________________________');



// FILTERING 
// // Filter = make new array from only elements of existing array that meet a condition
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

console.log('\n\nFILTERING: ');
console.log('Filtering copies elements from an existing array into a new array, but only if an element matches a particular condition.');
console.log('-------------------------------------------------');

// let cats = ['Hello Kitty', 'Maru', 'Garfield', 'Soymilk', 'Miles', 'Meridith']
console.log('\nOriginal "cats" array: ');
console.log(cats);

console.log('\nFiltering the "cats" array: ');
console.log('\n4. FILTERING: cat name < 6 characters for a new array of short cat names');

let shortCatNames = cats.filter( cat => cat.length < 6 )

console.log('\nMETHOD 1: Arrow notation');
console.log(shortCatNames);     // [ 'Maru', 'Miles' ]


let shortCatNames2 = cats.filter( function(cat) {
    return cat.length < 6;
})

console.log('\nMETHOD 2: Function version');
console.log(shortCatNames2);    // [ 'Maru', 'Miles' ]


let namesStartingWithG = cats.filter( cat => (cat[0] === 'g' || cat[0] === 'G') )

console.log('\n5. FILTERING: cat name starts with "g" or "G" for a new array of cat names beginning with "G"');
console.log(namesStartingWithG);        // [ 'Garfield' ]

// console.log(cats)  // debug: original array is not changed. 


// if the filtering condition becomes complicated then write a function instead
console.log('\n6. FILTERING with a function: ');
console.log('FILTERING: cat name starts with "g" or "G" for a new array of cat names beginning with "G"');

function startsWithG(name) {
    // check if the first character of thee cat name starts with a 'g' or 'G'
    // return name[0] === 'g' || name[0] === 'G';
    return name.toUpperCase().startsWith('G');
}

// Version 1: using the function with filter
let namesStartingWithG2 = cats.filter( cat => startsWithG(cat) )

console.log('\nVERSION 1: ');
console.log(namesStartingWithG2);       // [ 'Garfield' ]


// Version 2: an even more concise version using the function with filter
let namesStartingWithG3 = cats.filter( startsWithG )

console.log('\nVERSION 2: ');
console.log(namesStartingWithG3);       // [ 'Garfield' ]


// using filter to find something that fails the condition returns an empty array []
let namesStartingWithZ = cats.filter( cat => (cat[0] === 'z' || cat[0] === 'Z') )

console.log('\n7. FILTERING: cat name starts with "z" or "Z" for a new array of cat names beginning with "Z"');
console.log(namesStartingWithZ);        // []

console.log('\n-------------------------------------------------');


// Filtering works with arrays of objects too 
let students = [
    { name: 'andy', starId: 'aaaa', present: true },
    { name: 'brian', starId: 'bbbb', present: false },
    { name: 'catherine', starId: 'cccc', present: true },
    { name: 'clara', starId: 'ccc2', present: false },
    { name: 'duncan', starId: 'dddd', present: true },
    { name: 'steve', starId: 'ssss', present: false }
]

console.log('\nOriginal array of "students": ');
console.log(students);

console.log('\n8. FILTERING: with an arrays of "students" objects');

// FILTERING: only filter students that are present
let presentStudents = students.filter(student => student.present)

console.log('\n** FILTERING: only students that are present');
console.log('Who is here?', presentStudents);


// FILTERING: only filter students that are absent
// Exercise: can you use filter to create an array of students who are NOT present? 
let absentStudents = students.filter( function(absentee) {
    return !absentee.present;
})

console.log('\n** FILTERING: only students that are absent');
console.log('Who is not here?', absentStudents);


// Filter - remove students meeting a condition in other ways
// the filter condition returns true if it is not 'clara'
// { name: 'clara', starId: 'ccc2', present: false } is removed
let everyoneButClara = students.filter( student => student.name != 'clara' )

console.log('\n** FILTERING: removing a student, "clara"');
console.log(everyoneButClara);   // bye! --> 'clara' will be omitted


// If we have an example student in a variable
let brian = students[1];        // { name: 'brian', starId: 'bbbb', present: false }

// Can remove with filter 
let everyoneButBrian = students.filter( student => student != brian )

console.log('\n** FILTERING: removing a student, "brian", from a variable');
console.log(everyoneButBrian);


// FILTERING with function notation --> removing 'duncan'
let everyoneButDuncan = students.filter( function(student) {
    return student.name != 'duncan';        
})

console.log('\n** FILTERING: removing a student, "duncan"');
console.log(everyoneButDuncan);

// QUESTION: when mapping and filtering, does the original array change? 
// ANSWER: the original array does not change

// FILTERING: students whose names start with the letter 'C'
let onlyLetterC = students.filter( student => student.name.startsWith('c') )

console.log('\n** FILTERING: students whose names start with the letter "C"');
console.log(onlyLetterC);

console.log('_________________________________________________');


// Combine map and filter - get names of present students

// getting only names of everybody who is here
let presentStudentNames = students
    .filter( student => student.present )   // returns only students that are present
    .map( student => student.name )         // returns only names of the students that are present

console.log('\nCombining "map" and "filter" to extract only names of present students');
console.log(presentStudentNames);           // [ 'andy', 'catherine', 'duncan' ]


// Exercise: think about how you would do this with a loop? 
// alternate way of doing the above with a loop
let newArrayOfPresentees = [];

students.forEach( function(student) {
    if (student.present) {
        newArrayOfPresentees.push(student.name);
    }
})

console.log('\nUsing the forEach() loop to extract only names of present students');
console.log(newArrayOfPresentees);


// Exercise: can you create an array of starIDs of students who are NOT present? 
let absentStudentIDs = students.filter( function(student) {
    return !student.present;
}).map( function(student) {
    return student.starId;
})

console.log('\nCombining "map" and "filter" to extract only the IDs of absent students');
console.log(absentStudentIDs);

console.log('_________________________________________________');



// Spread operator works with arrays and objects too. 
// So if there's another class,
console.log("\nA. Spread operator works with arrays: ");
console.log("\nOriginal array of student objects: ");
console.log(students);

let moreStudents = [
    { name: 'justin', starId: 'jjj', present: true },
    { name: 'mary', starId: 'mmm', present: false },
]

console.log("\nOriginal array of more student objects: ");
console.log(moreStudents);

// using the spread operator to combine students & moreStudents arrays
let everyone = [...students, ...moreStudents]

console.log('\n** Using the spread operator to combine students & moreStudents arrays: ');
console.log(everyone);


// Using the spread operator with an object
// can be used to copy an object into a new object and add/edit properties
console.log("\nB. Spread operator works with objects: to copy an object into a new object and add/edit properties: ");

let student = { name: 'daniel', starId: 'ddd', present: true }

console.log("\nOriginal new student object for Daniel: ");
console.log(student);

// adding Daniel's email to the new 'student' object
// The spread operator code is equivalent to either of these 
// student.email = 'daniel@school.edu';
// student['email'] = 'daniel@school.edu';

// using the spread operator to add daniel's email to the student object
let studentPlusEmail = { ...student, email: 'daniel@school.edu' }

console.log("\n** Using the spread operator to add Daniel's email to in a new object: ");
console.log(studentPlusEmail);


// Modifying an attribute of 'student'
// make sure any attributes you change are at the end
let studentChangedStarId = { ...student, starId: 'eee' }   

console.log("\n** Using the spread operator to modify the 'starID' of the 'student' object and storing in another object: ");
console.log(studentChangedStarId);


// Another example object: using spread to combine operators
console.log("\n** Using the spread operator to combine 2 or more objects: ");

let studentClassReg = { '1150': true, '2560': false }

console.log("\nOriginal 'studentClassReg' object: ");
console.log(studentClassReg);

console.log("\nOriginal 'student' object: ");
console.log(student);

// Combine two or more objects using spread operator 
let studentAndReg = { ...student, ...studentClassReg }

console.log("\nCombining 'student' and 'studentClassReg' objects: ");
console.log(studentAndReg);

console.log('_________________________________________________');



// Similar functions: 
console.log("\nMore functions: ");

// find() returns the first match 
console.log("\n** find() returns the first match: ");

// if there are 2 steves in the 'students' array, then the first match will be returned
let steve = students.find( student => student.name === 'steve' )
let beyonce = students.find( student => student.name === 'beyonce' )

console.log("\nFinding students, 'steve' & 'beyonce' from the 'students' array: ");
console.log('steve', steve);        // steve { name: 'steve', starId: 'ssss', present: false } 
console.log('beyonce', beyonce);    // beyonce undefined


// includes() returns true/false
console.log("\n** includes() returns true/false: ");

let patrick = students.includes( student => student.name === 'patrick' )

console.log("\nChecking if 'beyonce' included in the 'students' array: ");
console.log('patrick', patrick);       // patrick false


// every() returns true if all of the items match a condition.
console.log("\n** every() returns true if all of the items match a condition: ");

// checking if Is everyone here? 
let isEveryoneHere = students.every( student => student.present )

console.log('Is everyone here? ' + isEveryoneHere);

console.log('\n-------------------------------------------------');


console.log("\nOriginal array of 'students': ");
console.log(students);

// Let's use map to get everyone here! 
let everyoneIsHere = students.map( student => { 
    return { ...student, present: true } 
})

console.log("\nUsing map with a spread operator to get everyone here: ");
console.log(everyoneIsHere);

console.log('\n-------------------------------------------------');


// checking if everyoneIsHere
console.log("\n'everyoneIsHere' array: ");
console.log(everyoneIsHere);

let isEveryoneHere2 = everyoneIsHere.every( student => student.present )

console.log("\nUsing every() to check if everyone here: ");
console.log('Is everyone here? ' + isEveryoneHere2);        // Is everyone here? true

console.log('\n-------------------------------------------------');


// using every() to check if every student's starID is greater than 3 characters
let starIDlength = students.every( student => student.starId.length >= 3 )

console.log("\nUsing every() to check if every student's starId is greater than 3 characters: ");
console.log('Every star ID long enough?', starIDlength);    // true

console.log('_________________________________________________');