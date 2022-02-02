// an object
let webClass = {
    name: 'Web client server', 
    code: 2560, 
    room: 'T.3050' 
}

// assignment object property values to variables
let className = webClass.name;
let classNameAgain = webClass['name'];

// modifying the room property of the webClass object
webClass.room = 'T.3080';
console.log(webClass);      // { name: 'Web client server', code: 2560, room: 'T.3080' }

// adding a new property to the webClass object
webClass.studentsEnrolled = 27;
console.log(webClass);


// Create a user object
// it has the attribute name with the value 'clara;
// it also has an attribute password with the value 'qwerty'
let user = { 
    username: 'clara', 
    password: 'qwerty' 
}
console.log(user.username);     // clara

// TODO can you print your FAKE password?
console.log(user.password);     // qwerty
console.log(user['password']);  // qwerty

// assigning the user password property value to a variable
let password = user.password;
console.log(password);          // qwerty

// TODO add your email to your user object
user.email = 'clara.james@minneapolis.edu';
// TODO print the entire object
console.log(user);

// What roles would you have in your dream job?
let roles = ['Play videogames', 'Drink tea'];   // an array
// adding a new property that is an array to the user object
user.roles = roles;
console.log(user);

// example contact info object
let contact = { 
    office: 'T.3066', 
    phone: '612-460-1159' 
}
// adding a new object to the user object
user.contact = contact;
console.log(user);


// an object
let stateTrees = {
    Michigan: 'Eastern White Pine',
    California: 'Giant Sequoia',
    Wisconsin: 'Sugar Maple',
    Minnesota: 'Red Pine'
}

// One way to loop - the for ... in loop
for (let state in stateTrees) {
    let tree = stateTrees[state];   // get the tree for a state; the property value
    console.log(`The state tree of ${state} is ${tree}`);   // do something with the info
}
console.log();

// Another way to loop - get the entries (attribute-value pairs) from the object
// Object.entries() method returns an array of a given object's own 
// enumerable string-keyed property [key, value] pairs.
let treeEntries = Object.entries(stateTrees);
for (let [state, tree] of treeEntries) {
    console.log(`The state tree of ${state} is ${tree}`);
}
console.log();

// Everything still works with nested values
let stateTreeArrays = {
    Michigan: ['Eastern White Pine', 'Oak'],
    California: ['Coastal Redwood', 'Giant Sequoia'],
    Wisconsin: ['Sugar Maple', 'Cottonwood'],
    Minnesota: ['Birch', 'Red Pine']
}

for (let state in stateTreeArrays) {
    let trees = stateTreeArrays[state]; // returns an array of property values

    // nested for loop
    trees.forEach(function (tree, index) {
        console.log(`Tree ${index + 1} of ${state} is ${tree}`);
    })
}
console.log();

// and the Object.entries way
let treeArrayEntries = Object.entries(stateTreeArrays);
for (let [state, trees] of treeArrayEntries) {
    console.log(`The state trees of ${state} are ${trees}`);
}
