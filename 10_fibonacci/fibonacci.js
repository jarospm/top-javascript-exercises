const fibonacci = function(n) {
    // Convert string input to number
    n = Number(n);
    
    // Handle negative numbers
    if (n < 0) return "OOPS";
    
    // Handle 0 case
    if (n === 0) return 0;
    
    // Base case: if n is 1 or 2, return 1
    if (n <= 2) return 1;
    
    // Recursive case: sum of previous two numbers
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
