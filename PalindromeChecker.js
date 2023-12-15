// Problem - A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindromeChecker(str) {

    // First removing all Non-alphanumeric characters and converting it into the lowerstring 
    const checkedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(checkedStr)

    let start = 0;
    let end = checkedStr.length - 1;

    while (start < end) {
        if (checkedStr[start] !== checkedStr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(palindromeChecker("A man, a plan, a canal. Panama"));
console.log(palindromeChecker("0_0 (: /-\ :) 0-0"));
console.log(palindromeChecker("_eye"));
