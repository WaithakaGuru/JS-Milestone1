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
  if (age >= 18) return `${name} is old enough to drive.`;
  return `${name} is not old enough to drive`;
}

// Challenge 7: BMI Calculator
function calculateBMI(weight, height) {
  const BMI = Math.trunc((weight / (height * height)) * 10) / 10;

  if (BMI < 18.5) return `Your BMI is ${BMI} - Underweight`;
  if (BMI >= 18.5 && BMI < 25) return `Your BMI is ${BMI} - Normal weight`;
  if (BMI >= 25 && BMI < 30) return `Your BMI is ${BMI} - Overweight`;
  else return `Your BMI is ${BMI} - Obese`;
}

// Challenge 8: Greeting Based on Time
function greetUser(name, hour) {
  let greeting = "";
  if (hour >= 5 && hour <= 11) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour <= 17) {
    greeting = "Good afternoon";
  } else if (hour >= 18 && hour <= 21) {
    greeting = "Good evening";
  } else if ((hour >= 22 && hour <= 23) || (hour >= 0 && hour <= 4)) {
    greeting = "Good night";
  } else {
    return "Invalid hour Value";
  }
  return `${greeting}, ${name}!`;
}

// Challenge 9: FizzBuzz
function FizzBuzzCheck(num) {
  let result = "";
  if (num % 3 === 0 && num % 5 === 0) {
    result = "FizzBuzz";
  } else if (num % 3 === 0) {
    result = "Fizz";
  } else if (num % 5 === 0) {
    result = "Buzz";
  } else {
    result = `${num}`;
  }
  return result;
}

// Challenge 10: Perimeter 2
function perimeter(shape, len) {
  if (shape === "s") {
    return len * 4;
  }
  if (shape === "c") {
    return (22 / 7) * len * 2;
  }
  return `Invalid Shape input`;
}

// Challenge 11: Sum of Even Numbers
function sumEvenNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}

// Challenge 12: Multiply by Itself
function powerUp(num, times) {
  if (times === 0 || num === 0) {
    num = 1;
  }
  while (times > 1) {
    num *= num;
    times--;
  }
  return num;
}

// Challenge 13: Factorial Calculator
function factorial(num) {
  if (num < 0) {
    return "Negative integers not Allowed!!";
  }
  if (num === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
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

console.log("Test for calculating BMI value");
console.log(calculateBMI(68, 1.75)); // 'Your BMI is 22.2 - Normal weight'
console.log(calculateBMI(56, 1.46)); // 'Your BMI is 26.2 - Overweight'

console.log("Test for Greeting User based Hour of the day");
console.log(greetUser("Waithaka", 25)); //'Invalid hour Value'
console.log(greetUser("John", 23)); // 'Good night, John!'
console.log(greetUser("Jane", 18)); // 'Good evening, Jane!'

console.log("Test for FizzBuzz");
console.log(FizzBuzzCheck(6)); // Fizz
console.log(FizzBuzzCheck(20)); // Buzz
console.log(FizzBuzzCheck(30)); // FizzBuzz
console.log(FizzBuzzCheck(8)); // '8'

console.log(
  "Test for Finding Perimeter based on shape (Circle - 'c' / Square - 's'",
);
console.log(perimeter("c", 4)); // 25.142857142857142
console.log(perimeter("r", 8)); // 'Invalid Shape input'
console.log(perimeter("s", 9)); // 36

console.log("Test for Finding Sum of Even Numbers in range 1 - n");
console.log(sumEvenNumbers(7)); // 12
console.log(sumEvenNumbers(2)); // 2
console.log(sumEvenNumbers(21)); // 110

console.log("Test for Multiplying n  by Itself for 'times' times");
console.log(powerUp(3, 2)); // 9
console.log(powerUp(0));
console.log(powerUp(6, 2));

console.log("Test for Finding Factorial of a number");
console.log(factorial(0)); // 1
console.log(factorial(-2)); // 'Negative integers not Allowed!!'
console.log(factorial(5)); //120
