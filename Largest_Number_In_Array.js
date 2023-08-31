function largestNumber(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNum = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (largestNum < arr[i][j]) {
                largestNum = arr[i][j];
            }
        }
        output[i] = largestNum;
    }
    return output;
}

console.log(largestNumber([[2, 5, 3, 6], [66, 6, 3, 77], [2262, 46, 767, 4546], [34, 6, 67, 87]]));