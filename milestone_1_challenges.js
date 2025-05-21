// Challenge 1: Sum of Two Numbers
function addition(num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) return num1 + num2;
  return "arguments must be of type 'number'";
}

/* Test Area */
console.log("Test for addition of Two Numbers");
console.log(addition(-3, 7)); // 4
console.log(addition(-2, -23)); // -25
console.log(addition(45, 81)); // 126
console.log(addition(4, "r")); //arguments must be of type 'number'
