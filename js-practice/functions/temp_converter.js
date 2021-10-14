/**
    Converts celsius temperature to fahrenheit temperature.
    @param {number} c The celsius temperature.
    @return {number} The fahrenheit temperature with 2 decimal places
*/
function c_to_f(c) {
    let fahrenheit = (c * 9 / 5) + 32;
    return fahrenheit.toFixed(2);       // fahrenheit value with 2 decimal places
}

let tempF = c_to_f(21);
console.log(tempF);


/**
    Converts fahrenheit temperature to celsius temperature.
    @param {number} f The fahrenheit temperature.
    @param {number} decimalPlaces An integer number.
    @return {number} The celsius temperature with/without fixed decimal points.
*/
function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9;

    // undefined conditions are considered to be false
    // i.e., when decimalPlaces == undefined, result is false
    if (decimalPlaces) 
    {
        return celsius.toFixed(decimalPlaces);
    } 
    else 
    {
        return celsius;
    }
}

let todayTemp = 67;     // fahrenheit representation

// tempC without decimal places
let tempC = f_to_c(todayTemp);      // JS does not process the 2nd arg as it is absent
console.log(tempC);

// tempC with decimal places
tempC = f_to_c(todayTemp, 4);
console.log(tempC);