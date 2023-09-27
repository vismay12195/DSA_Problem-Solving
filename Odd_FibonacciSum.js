// A program to get the sum of all fibonacci odd numbers upto a given "num" range.


function sumOddFibonacci(num) {
    // declaring the first two numbers of fibonacci series
    let n1 = 0;
    let n2 = 1;
    let n3;
    let answer = 0;

    //Loop logic for adding all the odd numbers of Fibonacci series
    while (n2 <= num) {
        if (n2 % 2 === 1) {
            answer += n2;
        }
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        // console.log(n2);

    }
    return console.log(answer);
}

sumOddFibonacci(10);
sumOddFibonacci(1000);
sumOddFibonacci(75025);

