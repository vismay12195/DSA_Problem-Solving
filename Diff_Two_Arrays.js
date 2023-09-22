// A program comparing the two arrays and return a new array with any items only found in one of the two given arrays, but not both.

function compareArr(arr1, arr2) {
    return console.log(arr1
        .concat(arr2)
        .filter(element => !arr1.includes(element) || !arr2.includes(element)));
}

compareArr(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);