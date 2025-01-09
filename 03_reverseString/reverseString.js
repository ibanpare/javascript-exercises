const reverseString = function(string) {
    let splitted = string.split("");
    let output = [];
    for(let i = splitted.length - 1; i >= 0 ; i--) {
        output.push(splitted[i]);
    }
    return output.join("");
};

// Do not edit below this line
module.exports = reverseString;
