function truncateString(str, num) {
    let trunString = "";
    if (num < str.length) {
        trunString = str.slice(0, num) + "...";
        return trunString;
    }
    else {
        return str;
    }

}


console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));