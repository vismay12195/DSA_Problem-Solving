// A program to find the sum value of numbers passed in the array as elements plus the sum of all the numbers between them. The lowest number might not come first in the array.

function sumArrRange(arr) {
    let sumTotal = 0;
    // creating a loop using the two elements of the array to create the range
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sumTotal += i;
    }
    console.log("The total of array elements for the given array range is: " + sumTotal);

}

sumArrRange([5, 10]);
sumArrRange([14, 11]);