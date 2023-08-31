// Logic: Here the main goal is to convert the first letter of any word to uppercase and algorithm as below:
// 1. Any String given, converting it to the totally lowercase;
// 2. Replacing the first letter of any word to its uppercase using .replace()
// 3. Use of RegEx by (1. Finding all non-whitespacce characters using \S
//                     2. Finding at the beginnning using ^ carot character
//                     3. after any white space character using \s)



function upperCase(str) {
    return str
        .toLowerCase()
        .replace(/(^|\s)\S/g, T => T.toUpperCase());
}

console.log(upperCase("sHoRt AnD sToUt"));
console.log(upperCase("This is universal javascript program for converting any word's first letter to uppercase."));