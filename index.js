// Function 1: Calculate the Area of a Rectangle
// This function takes the length and width of a rectangle as parameters and calculates its area.
function calculateRectangleArea(length, width) {
    // Check if either the length or width is less than or equal to zero.
    if (length <= 0 || width <= 0) {
        // If either dimension is invalid, return an error message.
        return "Invalid input: Length and width must be positive numbers.";
    }

    // Calculate the area by multiplying the length and width.
    const area = length * width;

    // Return the calculated area.
    return area;
}

// Function 2: Check if a Number is Even
// This function takes a number as input and checks if it is even.
function isEven(number) {
    // Use the modulo operator (%) to check if the number divided by 2 has a remainder of 0.
    if (number % 2 === 0) {
        // If the remainder is 0, the number is even, so return true.
        return true;
    } else {
        // If the remainder is not 0, the number is odd, so return false.
        return false;
    }
}

// Example usage of the functions:
const rectangleArea = calculateRectangleArea(5, 8); // Calculate the area of a rectangle with length 5 and width 8.
console.log("Rectangle Area:", rectangleArea); // Print the result.

const number = 10;
const isNumberEven = isEven(number); // Check if the number 10 is even.
console.log(`Is ${number} Even?`, isNumberEven); // Print the result.
