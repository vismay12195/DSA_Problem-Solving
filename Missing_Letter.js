// A program to find the missing letter from the string that would be in an alphabetical order.

function missingLetter(input) {
    var smallInput = input.toLowerCase();
    console.log(smallInput);
    var alphasequence = 'abcdefghijklmnopqrstuvwxyz'
    var first = alphasequence.indexOf(smallInput[0]);
    console.log(first);
    var last = smallInput.length;
    console.log(last);

    for (var i = first; i < first + last; i++) {
        if (!smallInput.includes(alphasequence[i])) {
            console.log(alphasequence[i]);
        }
    }
    return undefined;
}

missingLetter("stvxyz");
missingLetter("STVXZ");