// The program has to return a new array of unique values from two or more original arrays in the order they show up. So there is not sorting required, and there shouldn’t be any duplicates.

function sortedUnion(ar1, ar2, ar3) {
    // Array to store the final result
    const outputArray = [];

    // Looping through the arguments object
    for (let i = 0; i < arguments.length; i++) {
        var argsArray = arguments[i];
        console.log(argsArray);

        // Looping through the array at hand
        for (let j = 0; j < argsArray.length; j++) {
            let currentArray = argsArray[j];

            // checking whether the value is already on the array
            if (outputArray.indexOf(currentArray) == -1) {
                outputArray.push(currentArray);
            }
        }

    }
    return console.log(outputArray);

}

sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1]);
sortedUnion([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);