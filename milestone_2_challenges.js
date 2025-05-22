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

// Challenge 3: Election winner
function findWinner(objArray) {
  let winner = [objArray[0]];
  for (let i = 1; i < objArray.length; i++) {
    if (objArray[i]["votes"] > winner[0]["votes"]) {
      winner[0] = objArray[i];
    } else if (objArray[i]["votes"] === winner[0]["votes"])
      winner.push(objArray[i]);
  }
  return winner;
}

// Challenge 4: Longest word
function findLongestWord(wordArray) {
  let longestWord = wordArray[0];
  for (let i = 1; i < wordArray.length; i++) {
    if (wordArray[i].length > longestWord.length) longestWord = wordArray[i];
  }
  return longestWord;
}

// Challenge 5: Count Properties
function countObjProps(obj) {
  return Object.keys(obj).length;
}

// Challenge 6: Filter by Length
    // Approach One (for loop)
function filterByLength(stringArray, minLength) {
  let results = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length >= minLength) results.push(stringArray[i]);
  }
  return results;
}

    // Approach Two (inbuilt filter method)
const filterByLen = (stringArray, minLength) =>
  stringArray.filter((word) => word.length >= minLength);

// Challenge 7: Sum of Even Numbers
function sumEvenNumbers(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) sum += numArray[i];
  }
  return sum;
}

// Challenge 8:  Difference Between Sum of Even and Odd Numbers
function diffEvenOdd(numArray) {
  let sumEven = 0,
    sumOdd = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) sumEven += numArray[i];
    else sumOdd += numArray[i];
  }
  return sumEven - sumOdd;
}

// Challenge 9: Count Truthy
function countTruthy(obj) {
  let truthyCount = 0;
  for (let value of Object.values(obj)) {
    if (value) truthyCount++;
  }
  return truthyCount;
}

// Challenge 10: Average of Numbers
    // Approach One (using reduce() func)
function getAvg(numArray) {
  if (numArray.length === 0) return 0;
  return numArray.reduce((a, b) => a + b) / numArray.length;
}

// Approach Two (no inbuilt func)
function findAvg(numArray) {
  if (numArray.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum / numArray.length;
}

// challenge 11: Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}


// challenge 12: Reverse Linear Search
function reverseLinearSearch(arr, target) {
  let idx;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      idx = i;
    }
  }
  return idx ? idx : -1;
}

// Challenge 13: Linear Search All Indices
function linearSearchAll(arr, target) {
  let foundAt = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) foundAt.push(i);
  }
  return foundAt;
}

// Challenge 14: Count Occurrences - counts number of times an items appears in an array
function countOccurrences(stringArray) {
  let count = {};
  for (let i = 0; i < stringArray.length; i++) {
    if (count[stringArray[i]]) count[stringArray[i]] += 1;
    else count[stringArray[i]] = 1;
  }
  return count;
}

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

console.log(
  "\n  Test for [findWinner]: Finding the Object with the Highest value in an array of objects"
);
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Kim", votes: 75 },
  { name: "Charlie", votes: 65 },
];
console.log(findWinner(candidates)); //[{ name: 'Bob', votes: 75 }, { name: "Kim", votes: 75 }] 

console.log("\n  Test to: Find the Longest Word in an array of Strings");
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"])); // grapefruit

console.log("\n  Test for: Counting Properties in an object");
console.log(countObjProps({ name: "Alice", age: 25, city: "Paris" })); // 3

console.log("\n  Test for: Filtering words by their length [for loop]");
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", 
    "elephant"], 5)); // [ 'giraffe', 'hippo', 'elephant' ]
    
console.log(
  "\n  Test for filtering words by their length [inbuilt filter() method]"
);
console.log(filterByLen(["cat", "giraffe", "hippo", "dog", "elephant"], 5)); // [ 'giraffe', 'hippo', 'elephant' ]

console.log(
  "\n  Test for: finding Sum of Even Numbers in an Array of numbers"
);
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12

console.log(
  "\n  Test to find: Difference Between Sum of Even and Odd Numbers in an array of numbers"
);
console.log(diffEvenOdd([1, 2, 3, 4, 5, 6])); // 3

console.log("\n     Test for: Counting the Truthy values in an Array");
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null })); // 2

console.log(
  "\n  Test for: Finding Average of array-values in a numberArray [inbuilt reduce() method]"
);
console.log(getAvg([2, 3, 4, 6, 7, 5])); // 4.5
console.log(getAvg([])); // 0

console.log(
  "\n  Test for Finding Average of array-values in a numberArray [for loop]"
);
console.log(findAvg([2, 3, 4, 6, 7, 5])); // 4.5
console.log(findAvg([])); // 0

console.log("\n  Test to perform a Linear Search");
console.log(linearSearch([5, 3, 7, 1, 4], 7)); // 2
console.log(linearSearch([5, 3, 7, 1, 4], 10)); // -1

console.log(
  "\n  Test to perform Reverse Linear Search (return the index of the last occurrence of the target)"
);
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7)); // 5
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10)); // -1

console.log(
  "\n  Test for: Linear Search & return array of indices of all occurrences of the target"
);
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7)); // [2, 5]
console.log(linearSearchAll([5, 3, 7, 1, 4], 10)); // []

console.log("\n  Test for Counting all Occurences of each array-item");
console.log(
  countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
);
