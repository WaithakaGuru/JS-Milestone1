// Challenge 1: Sum of Two Numbers
function addition(num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) return num1 + num2;
  return "arguments must be of type 'number'";
}

// Challenge 2: Convert minutes into seconds
function convert(numberOfMinutes) {
  return numberOfMinutes * 60;
}

// Challenge 3: Find Perimeter of a Rectangle
function findRectanglePerimeter(length, width) {
  // check for negatives or zero
  if (length <= 0 || width <= 0)
    return "length/width of a shape cannot be negative";
  return 2 * (length + width);
}

// Challenge 4: Check Negative
function isNegative(num) {
  //  Check whether num is a number
  if (typeof num === "number") return num < 0;
}

/* Test Area */
console.log("Test for addition of Two Numbers");
console.log(addition(-3, 7)); // 4
console.log(addition(-2, -23)); // -25
console.log(addition(45, 81)); // 126
console.log(addition(4, "r")); //arguments must be of type 'number'

console.log("Test for Minutes to Seconds conversion");
console.log(convert(90)); // 5400
console.log(convert(60)); // 3600

console.log("Test for Finding Perimeter of a Rectangle");
console.log(findRectanglePerimeter(3, 5)); // 16
console.log(findRectanglePerimeter(45, "y")); // NaN
console.log(findRectanglePerimeter(-2, 3)); //  "length/width of a shape cannot be negative"
console.log(findRectanglePerimeter(3, 0)); // "length/width of a shape cannot be negative"

console.log("Test for checking if a number is negative");
console.log(isNegative(8)); // false
console.log(isNegative(-3)); // true
console.log(isNegative("")); // undefined
