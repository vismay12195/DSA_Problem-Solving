// Program - Creating a telephone validation RegEx to check whether it matches with different kinds of Telephone inputs and if the telephone number does not match with the predefined format then it would simply return false otherwise true

function telephoneValidator(str) {
    const validationRegEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    if (validationRegEx.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(telephoneValidator("1 (555) 555-5555")); // true
console.log(telephoneValidator("1 555-555-5555")); // true
console.log(telephoneValidator("123**&!!asdf#")); // false
console.log(telephoneValidator("1 555 555 5555")); // true