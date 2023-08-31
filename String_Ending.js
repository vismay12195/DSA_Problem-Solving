function endMatching(str, end) {
    let strEnding = new RegExp(end + "$", "i");
    return strEnding.test(str);
}
console.log(endMatching("Open sesame", "same"));
console.log(endMatching("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
console.log(endMatching("Abstraction", "action"));