function countPrimeNumbers() {
    let counter = 0
    for (var i=2; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            counter++
        };
    };
};

let start = performance.now();
countPrimeNumbers();
let end = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);