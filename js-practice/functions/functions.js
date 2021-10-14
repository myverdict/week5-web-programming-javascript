// function definition
function shout(text) {
    let shouty_text = text.toUpperCase() + "!!!";
    return shouty_text;
}

// call function
console.log(shout('hello world'));

// calling the function in a variable
let message = shout('hello web programmers');
console.log(message);