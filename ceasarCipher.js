// Program - Finding the Ceasars Cipher or also known as Shift Cipher value for given string and the shifting key could be any value. But the most commonly used is the ROT13 model with shifting value=13.

function ceasarCipher(str, key) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = lowerAlphabet.toUpperCase();

    // Now finding whether each character in str is matching either in lowerAlphabet or in upperAlphabet
    // And also checking for its position value(index) and finding its shifting cipher character and later joining each character to get the final result.

    const shiftingCipher = str.split("").map(char => {
        // Applying the conditions
        if (lowerAlphabet.includes(char)) {
            return lowerAlphabet[(lowerAlphabet.indexOf(char) + key) % 26];
        } else if (upperAlphabet.includes(char)) {
            return upperAlphabet[(upperAlphabet.indexOf(char) + key) % 26];
        }
        else {
            return char;
        }

    })
    // Joining all the characters and returning the final output
    return shiftingCipher.join('');
}

console.log(ceasarCipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.", 13));
console.log(ceasarCipher("serr cvmmn!", 13));