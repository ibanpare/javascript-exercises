const repeatString = function(string,repeatFor) {
    let outputString = ""
    if (repeatFor < 0) return "ERROR";
    for(let i = 1; i <= repeatFor; i++) {
        outputString += string;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
