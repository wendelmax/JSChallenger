// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

function myFunction(x) {

    return x.number * x.percentage / 100
 }

 /*Test Cases:
myFunction({number: 100, percentage: 50}) Expected 50
myFunction({number: 777, percentage: 2}) Expected 15.54
myFunction({number: 500, percentage: 99}) Expected 495
*/