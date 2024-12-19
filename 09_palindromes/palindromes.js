// Write a function that determines whether or not a given string is a palindrome.  
// A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

const palindromes = function (string) {
    // Remove punctuation, spaces, and convert to lowercase
    const cleanString = string.replace(/[^\w]/g, '').toLowerCase();
    // Reverse the string
    const reversedString = cleanString.split('').reverse().join('');
    // Compare the original string with the reversed string
    return cleanString === reversedString;
};

//without regex:
// Since we only consider letters and numbers, create a variable containing all valid character
// const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

//   // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
//   const cleanedString = string
//     .toLowerCase()
//     .split('')
//     .filter((character) => alphanumerical.includes(character))
//     .join('');

// Do not edit below this line
module.exports = palindromes;
