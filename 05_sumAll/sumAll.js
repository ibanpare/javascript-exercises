const sumAll = function(lowerBound, upperBound) {
    if (upperBound < lowerBound) {
        newLowerBound = upperBound;
        newUpperBound = lowerBound;
    } else {
        newLowerBound = lowerBound;
        newUpperBound = upperBound;
    }
    if (lowerBound < 0 || upperBound < 0) return "ERROR";
    if (Math.floor(lowerBound) != lowerBound || 
       Math.floor(upperBound) != upperBound) 
       return "ERROR";  
    if (typeof lowerBound != "number" || typeof upperBound != "number") return "ERROR";
    let outputSum = 0;
    for (let i = newLowerBound; i <= newUpperBound; i++) {
        outputSum += i;
    }
    return outputSum;
};

// Do not edit below this line
module.exports = sumAll;
