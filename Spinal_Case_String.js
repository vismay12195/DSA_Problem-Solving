// A program to convert a string to spinal case. Spinal case is all-lowercased-words-joined-by-dashes.

function spinalCase(str) {
    return console.log(str
        .toLowerCase()
        .trim()
        .split(/\s|_|(?=[A-Z])/)
        .join("-"));
};

spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show");
spinalCase("AllThe-small Things");