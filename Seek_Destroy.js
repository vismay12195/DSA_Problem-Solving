// A program where an initial array as the first argument to the function, followed by one or more arguments. Removing all elements from the initial array that are of the same value as these arguments.

function seekDestroy(initArr, ...removingItems) {
    return console.log(initArr.filter(items => !removingItems.includes(items)));
}

seekDestroy([1, 2, 3, 5, 1, 2, 3], 2, 3);
seekDestroy(["tree", "hamburger", 53], "tree", 53);