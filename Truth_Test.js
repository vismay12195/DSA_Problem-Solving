function truthTest(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            console.log(num);
        }
    }
    console.log(undefined);
}

truthTest([254, 24, 66, 33, 56], num => num % 2 === 0);
truthTest([1, 3, 5, 9], function (num) { return num % 2 === 0; });
