// Challenge 1: Sum of Two Numbers
function addition(num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) return num1 + num2;
  return "arguments must be of type 'number'";
}

// Challenge 2: Convert minutes into seconds
function convert(numberOfMinutes) {
  return numberOfMinutes * 60;
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
