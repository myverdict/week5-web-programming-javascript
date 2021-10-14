/**
 * Checks to see if an address belongs to a Minnesota address.
 * Minnesota Zip codes are between 55001 to 56763.
 * @param {number/string} code zip code
 * @return {boolean} true if Minnesota zip, false otherwise
 */
function isMinnesotaZip(code) {
    if (code >= 55001 && code <= 56763) 
    {
        return true;
    }
    else 
    {
        return false;
    }
}

// function call
console.log(isMinnesotaZip(55403));     // number parameter --> true
console.log(isMinnesotaZip('55305'));   // string parameter --> true

// testing values
console.log(isMinnesotaZip(55001));     // true
console.log(isMinnesotaZip(56763));     //true
console.log(isMinnesotaZip(55000));     // false
console.log(isMinnesotaZip(56764));     // false
console.log(isMinnesotaZip(9999999));   // false
console.log(isMinnesotaZip(-1));        // false
