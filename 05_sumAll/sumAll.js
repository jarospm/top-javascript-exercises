const sumAll = function(start, end) {
    // Check for negative numbers and non-integers
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }
    
    // If all checks pass, proceed with the sum
    const min = Math.min(start, end);
    const max = Math.max(start, end);
    
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
