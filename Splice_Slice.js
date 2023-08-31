//  Logic:  Adding arr1's elements to the arr2 at the specified index which is here "num".
// 1. By slicing the arr2, I am creating the copy of the arr2 without mutating it.
// 2. While Splice allows to add the elements, now adding the ...arr1 element's to the copied the arr2 starting from the specified position "num"


function addSplice(arr1, arr2, num) {
    let sliceArr = arr2.slice();
    sliceArr.splice(num, 0, ...arr1);
    return sliceArr;
}

console.log(addSplice([23, 4, 5, 3], [1, 66, 3, 2], 3));