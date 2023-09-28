// A program to flatten the array without using the Array.flat() or Array.flatMap() method. Also accounting for the various levels of nesting.

function flatArr(arr) {
    var emptyArr = [];
    // Checking if all the elements in the arr are arrays.
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) === true) {
            //Recursion of the flatArr function over the nested array element to get only the number out of those nested arrays
            emptyArr.push(...flatArr(arr[i]));
        }
        else {
            emptyArr.push(arr[i]);
        }
    }
    return emptyArr;
}

console.log(flatArr([[["a"]], [["b"]]]));
console.log(flatArr([1, {}, [3, [[4]]]]));
console.log(flatArr([1, [2], [3, [[4]]]]));

// ====================================== METHOD - 2 ==========================================


// function flatArr(arr) {
//     let emptyArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             // Applying the concat method to add the array elements into an empty array.
//             emptyArr = [].concat(...arr);

//             //Checking if there are still any more nested array left and if there are then calling out the function again
//             return emptyArr.some(Array.isArray) ? flatArr(emptyArr) : emptyArr;
//         }
//     }

// }
