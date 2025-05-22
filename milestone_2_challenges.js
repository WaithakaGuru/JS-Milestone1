// Challenge 1: Sum of Positives 
function sumOfPositives(numArray){
    let sum = 0;
    for(let i=0; i<numArray.length; i++){
        if(numArray[i] > 0) sum += numArray[i];
    }
    return sum;
}

// Challenge 2: Find Maximum Value
const findMax = (numArray) => {
  let max = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > max) max = numArray[i];
  }
  return max;
};

/* Testing Area */
console.log("\n  Test for Sum of Positives");
console.log(sumOfPositives([1, -3, 5, -2, 9, -8])); // 15
console.log(sumOfPositives([1, 45, 8, 0, -3, 3, -45, 6])); // 63
console.log(sumOfPositives([0, 0, 0, 0])); // 0
console.log(sumOfPositives([-2, -6, -8, -19])); // 0

console.log("\n  Test to Find Maximum value in an array");
console.log(findMax([1, 3, 4, 55, 6, 77, 34, 123, -2])); // 123
console.log(findMax([0, 0, 0])); // 0
console.log(findMax([-45, -56, -1, -2])); // -1

