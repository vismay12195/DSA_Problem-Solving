// A program to search for a word and replacing it with a new word and also matching the case of the first character of that new word with the original word.

function searchReplace(str, original, update) {
    // Storing “update” parameter in a new variable to perform few tasks
    var latestUpdate = update;
    let updateLength = update.length;

    // Task of checking whether the first character of “before” is in Uppercase
    if (original.charAt(0) === original.charAt(0).toUpperCase()) {
        latestUpdate = update.charAt(0).toUpperCase();
        update = update.slice(1, updateLength);
        return console.log(str.replace(original, latestUpdate + update));
    }

    // Task of checking whether the first character of “before” is in lowercase
    else if (original.charAt(0) === original.charAt(0).toLowerCase()) {
        latestUpdate = update.charAt(0).toLowerCase();
        update = update.slice(1, updateLength);
        return console.log(str.replace(original, latestUpdate + update));
    }

}

searchReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
searchReplace("I think we should look up there", "up", "Down");
searchReplace("He is Sleeping on the couch", "Sleeping", "sitting");
searchReplace("Let us get back to more Coding", "Coding", "algorithms");