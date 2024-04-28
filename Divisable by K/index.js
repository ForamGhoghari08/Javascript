function printDivisibleNumbers(num, K) {
    for (let i = 1; i <= num; i++) {
        if (i % K === 0) {
            console.log(i);
        }
    }
}

let num = 7;
let K = 2;
printDivisibleNumbers(num, K);
