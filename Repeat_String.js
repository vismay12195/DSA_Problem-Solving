function repeatStringNumTimes(str, num) {
    let repeatStr = "\n";
    while (num > 0) {
        repeatStr += str;
        num--;
    }
    console.log(repeatStr);

    if (num <= 0) {
        return repeatStr;
    }
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("ES6", 4);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("repeat", 0);
