// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction(x) {

    return Number.isInteger(x)
 }

/*Test Cases:
myFunction(4) Expected true
myFunction(1.123) Expected false
myFunction(1048) Expected true
myFunction(10.48) Expected false
*/