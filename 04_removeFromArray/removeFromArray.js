const removeFromArray = function(array, ...whatToRemove) {
    outer: for (let i = 0; i < array.length; i++) {
        for (const arg of whatToRemove) {
            let argIndex = array.indexOf(arg);
            if (argIndex < 0) continue;
            array.splice(argIndex,1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;