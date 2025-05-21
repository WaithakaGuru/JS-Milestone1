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

// Challenge 5: Can Drive
function canDrive(name, age) {
  if (age >= 18) return `${name} is old enough to drive`;
  return `${name} is not old enough to drive`;
}

// Challenge 6: Largest Number among Three numbers
function findLargest(num1, num2, num3) {
  let largest = num1;
  if (num2 > largest) {
    largest = num2;
  }
  if (num3 > largest) {
    largest = num3;
  }
  return largest;
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

console.log("Test for checking whether User can Drive based on age");
console.log(canDrive("Mwas", 34)); // Mwas is old enough to drive
console.log(canDrive("John", 18)); // 'John is old enough to drive'
console.log(canDrive("Elian", 17)); // 'Elian is not old enough to drive'

console.log("Test for Finging Largest number among three numbers");
console.log(findLargest(12, 45, 7)); // 45
console.log(findLargest(-10, -6, -3)); // -3
console.log(findLargest(10, 4, 10)); // 10
console.log(findLargest(7, 7, 7)); // 7
console.log(findLargest(67, 34, 18)); // 67
console.log(findLargest(23, 45, 45)); // 45