// an array of animals
let animals = ['lion', 'tiger', 'cheetah'];

console.log(animals);           // [ 'lion', 'tiger', 'cheetah' ]
console.log(animals[1]);        // tiger
console.log(animals[1000]);     // undefined

// ADDING A NEW ITEM TO AN ARRAY
animals[6] = 'giraffe';
console.log(animals);           // [ 'lion', 'tiger', 'cheetah', <3 empty items>, 'giraffe' ]
console.log(animals[5]);        // undefined

// MODIFYING ARRAY ELEMENTS
animals[1] = 'zebra';
console.log(animals);           // [ 'lion', 'zebra', 'cheetah', <3 empty items>, 'giraffe' ]

// ADDING ITEMS AT THE END OF AN ARRAY WITH 'push'
animals.push('elephant');
console.log(animals);           // [ 'lion', 'zebra', 'cheetah', <3 empty items>, 'giraffe', 'elephant' ]

// ADDING ITEMS AT THE START OF AN ARRAY WITH 'unshift'
animals.unshift('deer');
console.log(animals);           // [ 'deer', 'lion', 'zebra', 'cheetah', <3 empty items>, 'giraffe', 'elephant' ]

// REMOVING ITEMS FROM THE START OF AN ARRAY WITH 'shift'
let firstAnimal = animals.shift();
console.log(firstAnimal);       // deer
console.log(animals);           // [ 'lion', 'zebra', 'cheetah', <3 empty items>, 'giraffe', 'elephant' ]

// REMOVING ITSM FROM THE END OF AN ARRAY WITH 'pop'
let lastAnimal = animals.pop();
console.log(lastAnimal);        // elephant
console.log(animals);           // [ 'lion', 'zebra', 'cheetah', <3 empty items>, 'giraffe' ]

// REVERSING THE ORDER OF ITEMS IN AN ARRAY
animals.reverse();
console.log(animals);           // [ 'giraffe', <3 empty items>, 'cheetah', 'zebra', 'lion' ]

// SORTING THE ITEMS IN AN ARRAY
animals.sort();
console.log(animals);           // [ 'cheetah', 'giraffe', 'lion', 'zebra', <3 empty items> ]

// LENGTH OF AN ARRAY
let numberOfAnimals = animals.length;
console.log(numberOfAnimals);               // 7

// FINDING ELEMENTS IN AN ARRAY WITH 'indexOf' & 'includes'
// getting array index for an existing item
console.log(animals.indexOf('lion'));       // 2

// index for a non-existing item
console.log(animals.indexOf('walrus'));     // -1

// use case with indexOf
if (animals.indexOf('walrus') == -1) {
    console.log(animals.indexOf('walrus') == -1);   // true
    console.log('walrus is not in the array');      // walrus is not in the array
}

// use case with includes
if(animals.includes('cheetah')) {
    console.log(animals.includes('cheetah'));       // true
    console.log('cheetah is in the array');         // cheetah is in the array
}

// JOINING ARRAY ELEMENTS WITH 'join'
console.log(animals.join());            // cheetah,giraffe,lion,zebra,,,
console.log(animals.join(' * '));       // cheetah * giraffe * lion * zebra *  *  *

// LOOPING OVER ARRAYS
animals.forEach( function(animal) {
    console.log(animal);                    // does not print empty array elements
    console.log(animal.toUpperCase());      // does not print empty array elements
})

animals.forEach( function(animal) {
    console.log(animal.toUpperCase());      // does not print empty array elements
})

animals.forEach( function(animal, index) {
    console.log(index, animal);             // does not print empty array elements
})

// Practice 1 - looping
// Use a loop with your animal array and print the length of each animal name
animals.forEach( function(animal) {
    console.log(animal.length);             // does not print anything for empty array elements
})

// Practice 2 - looping
// Use a loop with your animal array and make a new array with each animal name length
animals.push('alligator');                  // debug testing              

let animalsNameLen = [];                    // create an empty array first

animals.forEach( function(animal) {
    animalsNameLen.push(animal.length);     // push animal name length onto the array
})
console.log(animals);                       // [ 'cheetah', 'giraffe', 'lion', 'zebra', <3 empty items>, 'alligator' ]
console.log(animalsNameLen);                // [ 7, 7, 4, 5, 9 ]

