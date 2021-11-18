// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(x) {

    return x.toString().split('').map(Number)
 }

 /*Test Cases:
myFunction(10) Expected [1,0]
myFunction(931) Expected [9,3,1]
myFunction(193278) Expected [1,9,3,2,7,8]
*/