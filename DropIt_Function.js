// A program where for the given array, iterate through and remove each element starting from the first element (the 0 index) until the function "func" returns true when the iterated element is passed through it. Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropIt(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}

console.log(dropIt([1, 2, 3, 4], function (n) { return n >= 3; }));
console.log(dropIt([1, 2, 3, 4], function (n) { return n > 5; }));


// ====================================== METHOD - 2 =============================================

// function dropIt(arr, func) {
//     return arr.length > 0 && !func(arr[0]) ? (dropIt(arr.slice(1), func)) : arr;
// }

// console.log(dropIt([1, 2, 3, 4], function (n) { return n >= 3; }));