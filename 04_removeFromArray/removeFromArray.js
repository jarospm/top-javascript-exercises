const removeFromArray = function(array, ...args) {
    let result = [];
    
    result = array.filter(function(element) {
        return !args.includes(element);
    })
    
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
