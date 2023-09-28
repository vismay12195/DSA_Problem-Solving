// A program to return an English translated sentence of the passed binary string.

function binaryString(str) {

    // First splitting the string to array elements
    const splittedArr = str.split(" ");
    str = '';
    let translate = str;
    //Looping through each element of the splitted array to convert the binary elements to their string integer value using the String.fromCharCode and parseInt methods.
    splittedArr.forEach(e => {
        translate += String.fromCharCode(parseInt(e, 2));
    });
    return translate;
}

console.log(binaryString("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));