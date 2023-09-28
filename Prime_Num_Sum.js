// A program to get the sum of Prime numbers for the given range.
// A "Prime" number is a whole number greater than 1 with exactly two divisors: 1 and itself.

function sumPrime(end) {

    //Initializing the sum variable
    let sum = 0;
    //Looping through the start till the end number provided to get prime numbers
    for (let i = 2; i <= end; i++) {
        let isPrime = 1;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isPrime = 0;
                break;
            }
        }
        // Adding the prime numbers to the sum to get their final sum value
        if (isPrime == 1) {
            sum += i;
        }
    }
    console.log(sum);

}

sumPrime(10);
sumPrime(977);