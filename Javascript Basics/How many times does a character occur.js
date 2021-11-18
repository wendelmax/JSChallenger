// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

function myFunction(c, string) {

    return string.toLowerCase().split(c).length - 1;
 }

 /*Test Cases:
myFunction('m', 'How many times does the character occur in this sentence?') Expected 2
myFunction('h', 'How many times does the character occur in this sentence?') Expected 4
myFunction('?', 'How many times does the character occur in this sentence?') Expected 1
myFunction('z', 'How many times does the character occur in this sentence?') Expected 0
*/