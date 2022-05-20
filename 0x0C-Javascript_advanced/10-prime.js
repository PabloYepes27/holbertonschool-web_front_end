function countPrimeNumbers() {
    let counter = 0
    for (var i=2; i <= 100; i++) {
        if (i % 2 !== 0) {
            counter++
        };
    };
};

let start = performance.now();
for (var i=0; i < 100; i++) countPrimeNumbers();
let end = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);