const reverseString = function(string) {
    //split by character first, do the reversal, and then join back together into a string
    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
