// A program where pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form the building blocks of the DNA double helix. 
// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

function missingElement(input) {
    const letter = input.split("");
    const individualPairs = { A: 'T', T: 'A', G: 'C', C: 'G' };
    const group = letter.map(letter => {
        return [letter, individualPairs[letter]];
    });
    console.log(group);

}

missingElement("GCG");
missingElement("CTCTA");