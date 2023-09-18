/**
 * Joins the name of a city and state with a comma.
 * @param {string} city City name
 * @param {string} state State name
 * @return {string} concatenated string of city & state
 */
function cityStateAddress(city, state) {
  // let address = city + ", " + state.toUpperCase();    // wi --> WI
  // alternate way of writing the above code using template string
  let address = `${city}, ${state.toUpperCase()}`;
  return address;
}

console.log(cityStateAddress("Minneapolis", "mn")); // Minneapolis, MN

let address = cityStateAddress("Seattle", "WA");
console.log(address); // Seattle, WA
