// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

function myFunction(num) {
    let counter = 0;
    do {
      counter = 0;
      for (let i = 2; i <= num; i++) {
        if (num % i === 0) counter++;
      }
      num++;
    } while (counter > 1);
    return num - 1;
}

/*Test Cases:
myFunction(38) Expected 41
myFunction(7) Expected 7
myFunction(115) Expected 127
myFunction(2000) Expected 2003
 */
