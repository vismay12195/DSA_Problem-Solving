// A program to find the smallest common factor for the given two numbers out of order in an array and as well as by all the numbers that are in between those two numbers.

//Here finding the LCM using the formula which includes the use of HCF as well: LCM = (a*b)/HCF

function findLcm(arr) {
    // finding the bigger and smaller number from the provided array
    const big = Math.max(...arr);
    const small = Math.min(...arr);
    // Decision making iterator
    var iterator = 1;

    // //Increasing the count until it is equal to (big-small) and it returns the final LCM = big * iterator after iterations.
    while (true) {
        var count = 0;
        for (let l = small; l < big; l++) {
            if (big * iterator % l !== 0) {
                break;
            }
            count++;
        }
        if (count === (big - small)) {
            return console.log(big * iterator);
        }
        iterator++;
    }

}
findLcm([23, 18]);
findLcm([8, 3]);

// ============================== METHOD - 2 ==============================

// function findLCM(arr) {
//     const small = Math.min(...arr);
//     const big = Math.max(...arr);

//     let lcm = big;
//     while (true) {
//         let isLcm = true;

//         for (let i = small; i <= big; i++) {
//             if (lcm % i !== 0) {
//                 isLcm = false;
//                 break;
//             }
//         }
//         if (isLcm) {
//             return lcm;
//         }
//         else {
//             lcm++;
//         }

//     }

// }
// console.log(findLCM([23, 18]));
// console.log(findLCM([9, 5]));
