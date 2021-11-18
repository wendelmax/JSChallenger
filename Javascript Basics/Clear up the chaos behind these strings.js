// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
    const str = a.concat(b.split("").reverse().join("")).replaceAll("%", "");
    return str[0].toUpperCase() + str.slice(1);
}

/*Test Cases:
myFunction('java', 'tpi%rcs') Expected 'Javascript'
myFunction('c%ountry', 'edis') Expected 'Countryside'
myFunction('down', 'nw%ot') Expected 'Downtown'
*/