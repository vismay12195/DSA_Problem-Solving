// A program where making a function that looks through an array of objects(first argument) and returns an array of all objects that have matching name and value pairs(second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array. 


function keyValueCheck(original, given) {
    // Returning array where the matched key and value will be added
    const originalMatches = [];

    for (let i = 0; i < original.length; i++) {
        let foundMismatch = false;
        // Using the forin loop to go through each pairs
        for (const givenProp in given) {
            if (original[i][givenProp] !== given[givenProp]) {
                foundMismatch = true;
            }
        }
        if (!foundMismatch) {
            originalMatches.push(original[i]);
        }
    }
    return console.log(originalMatches);
}
keyValueCheck([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 });

keyValueCheck([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 });

keyValueCheck([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });