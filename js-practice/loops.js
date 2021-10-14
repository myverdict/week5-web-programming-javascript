// an array with 3 elements
// the size of an array can be changed unlike in Java or C#
// an array in JS behaves a lot like a python list
let birds = ['Owl', 'Robin', 'Eagle'];

console.log('An array: ');
console.log(birds);

console.log();


console.log('forEach() array method: ');
// forEach method can have one arg for each array item
// and another arg for the index of the each array item

// birds.forEach(function(bird) {
birds.forEach(function(bird, index) {
    // repeats once for each item in the array
    // function will be called for each item in the array
    console.log(bird.toUpperCase(), index);
})

console.log();


// Traditional for loop
console.log('Traditional For loop:');
for (let i = 0; i < birds.length; i++) {
    console.log(i, birds[i]);
}