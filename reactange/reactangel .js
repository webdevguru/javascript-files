// Define a function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    // Ensure the provided dimensions are positive numbers
    if (width <= 0 || height <= 0) {
        return 'Invalid dimensions';
    }

    // Calculate the area
    let area = width * height;

    // Return the calculated area
    return area;
}

// Example usage
let width = 5;
let height = 10;

let area = calculateRectangleArea(width, height);
console.log(`The area of the rectangle is ${area}`);
