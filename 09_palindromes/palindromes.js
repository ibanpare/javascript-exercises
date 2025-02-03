const palindromes = function (string) {
    let originalString = string.replace(/[^\w]|_/g, '').toLowerCase().split("");
    const reversedOriginal = [...originalString].reverse();
    return reversedOriginal.join("") == originalString.join("");
};

// Do not edit below this line
module.exports = palindromes;
