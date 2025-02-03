const fibonacci = function(index) {
    // bisogna aggiustare mettendo anche realIndex = index - 1
    javascriptIndex = parseInt(index) - 1;
    if(index < 0) return "OOPS";
    if(index == 0) return 0;
    if(javascriptIndex == 1 || javascriptIndex == 2) return 1;
    const fibonacciSequence = [1, 1];
    for(let i = 2; i <= javascriptIndex; i++) {
        let nextNumber = fibonacciSequence[i -1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }
    return fibonacciSequence[javascriptIndex];

    // A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc
    // calcola fibonacci fino a index incluso
    // poi fai find
};

// Do not edit below this line
module.exports = fibonacci;
