// JSON - JavaScript object notation: arrays and objects in JS, and combinations of these

// This is an array
flowers = [ "sunflower", "rose", "daisy" ];

// looping over arrays with forEach
console.log("Looping over ARRAYS using forEach(): ");

flowers.forEach( function(flower) {
    console.log(flower);
})


// This is an object
obj = { 
    name: "clara", 
    age: 100,  
    password: "kittens" 
};

// looping over an object using for...in...
console.log("\nLooping over OBJECTS using for...in... : ");

for(let prop in obj) {
    let value = obj[prop];
    console.log(prop + " " + value);
}