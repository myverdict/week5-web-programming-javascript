// Create an object. Values can be strings, numbers, lists, and other objects
let user = {
  username: "Zoe",
  password: "kittens",
  userid: 1,
  roles: ["user", "admin"], // an array
  // an object inside the user object
  contact: { phone: "123-456-7890", office: "T.1400" },
};
console.log(user);

console.log();

// changing/modifying data
user.userid = 101;
console.log(user);

console.log();

console.log("User roles are:", user.roles); // User roles are: [ 'user', 'admin' ]
console.log("User roles are:", user["roles"]); // User roles are: [ 'user', 'admin' ]
console.log("Users first role is " + user.roles[0]); // Users first role is user

console.log();

// looping over all user's roles
console.log("All the user roles are: ");
user.roles.forEach(function (role) {
  console.log(role);
});

console.log();

// change office contact
console.log("Old office contact is " + user.contact.office);
user.contact.office = "M.1234";
console.log("New office contact is " + user.contact.office);

// access nested values
console.log("User phone number is " + user.contact.phone);

console.log();

// add another new attribute to the object
user.email = "abc@gmail.com";
console.log(user);

console.log();

// Nested objects in a concatenated string display as [object Object]
console.log("Full user info:\n" + user);
console.log();

console.log("Full user info:\n", user);
console.log();

// Print all of the data on one line
console.log("Full user info: \n" + JSON.stringify(user));
console.log();

// On multiple lines with 2 spaces of indentation
console.log("Full user : \n" + JSON.stringify(user, null, 2));
