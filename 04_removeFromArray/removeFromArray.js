const removeFromArray = function(array, ...whatToRemove) {
    for (const arg of whatToRemove) {
        let argIndex = array.lastIndexOf(arg);
        array.splice(argIndex,1)
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;