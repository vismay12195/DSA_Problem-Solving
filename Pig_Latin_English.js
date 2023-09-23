// A program to alternate the English words in a manner where
// - If a word begins with a consonant, take the first consonant or consonant cluster and move it to the end of the word, and add the "ay" to it.
// - If a word begins with a vowel, just add the "way" at the end.


function checkWord(str) {
    let lowerStr = str.toLowerCase();

    // Searching for the index from where the first vowel comes in the string
    var index = lowerStr.search(/[aeiou]/);
    // If there is no vowel in the string and all letters are consonants
    if (index === -1) {
        return console.log(lowerStr + "ay");
    }
    // Fulfilling the condition of a word starting with a vowel
    else if (index === 0) {
        return console.log(lowerStr + "way");
    }
    //fulfilling the condition of a word when it starts with a consonant
    else {
        return console.log(lowerStr.slice(index) + lowerStr.substr(0, index) + "ay");
    }
}

checkWord("Classic");
checkWord("Dynamic");
checkWord("Apple");
checkWord("Paragraph");
checkWord("schwartz");
checkWord("rhythm");