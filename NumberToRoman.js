// Program - Converting the Arabic Numerals(Numbers) to their Roman Numerals

function romanNumeralConverter(num) {

    // In roman there Numbers are represented using the Latin Alphabets and there are only few Alphabets needed to convert any numbers to its Roman numeral representation
    let romArray = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    // All the individual Object Keys will be added to romanValue
    let romanValue = '';

    // Going through each key-value pair until the final romanValue is obtained
    for (let item in romArray) {
        while (num >= romArray[item]) {
            romanValue += item;
            num -= romArray[item];
        }
    }
    return romanValue;
}

console.log(romanNumeralConverter(83));
console.log(romanNumeralConverter(798));

