// A program to convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function entityHTML(input) {

    // Storing the given characters and their particular entities in an array
    const charex = [/&/g, /</g, />/g, /\"/g, /\'/g];
    const entity = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];

    //Looping through each elements of characters and replacing them in string with their specific entities
    for (var i = 0; i < charex.length; i++) {
        input = input.replace(charex[i], entity[i]);
    }
    return console.log(input);
}

entityHTML('Stuff in "quotation marks"');
