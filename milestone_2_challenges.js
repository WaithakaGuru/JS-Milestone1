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
