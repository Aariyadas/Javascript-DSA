const findDuplicates = (arr) => {
  let seen = new Set();
  return arr.filter((items) => {
    if (seen.has(items)) {
      return true;
    }
    seen.add(items);
    return false;
  });
};

const array = [1, 2, 3, 4, 5, 3, 6, 7, 2];-
const duplicates = findDuplicates(array); // Use the correct function name
console.log(duplicates); // Output: [3, 2]

const functionDup = (arr) => {
  let dup = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        dup.push(arr[i]);
      }
    }
  }
  return dup;
};

const duplicate = functionDup(array);
console.log(duplicates, "_________________"); // Output: [3, 2]

const occurence = (arr) => {
  let count = {};
  arr.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  return count;
};
const occurrences = occurence(array);
console.log(occurrences);

const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  let counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let char of str) {
    if (vowels.includes(char)) {
      counts[char] = counts[char.toLowerCase()] + 1;
    }
  }
  return counts;
};
const inputString = "Hello World, this is a test string!";
const vowelCounts = countVowels(inputString);
console.log(vowelCounts);

const swapElement = (arr) => {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
};

const arrays = [1, 2, 3, 4, 5];
console.log(swapElement(arrays), "ARRR"); // Output: [5, 2, 3, 4, 1]

const even = (arr) => {
  return arr.filter((num) => num % 2 == 0);
};

const evenNumbers = even(array);
console.log(evenNumbers);

const countOccurence = (arr) => {
  const count = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count[arr[i]] = (count[arr[i]] || 0) + 1;
    }
  }
  return count;
};

const evenOccurrences = countOccurence(array);
console.log(evenOccurrences); //

const sortAscending = (arr) => {
  return arr.sort((a, b) => a - b);
};

const ascending = sortAscending(array);
console.log(ascending);

const uniqueSort = (arr) => {
  const unique = [...new Set(arr)];
  return unique.sort((a, b) => a - b);
};

console.log(uniqueSort(array));

const reverseNumber = (num) => {
  const str = num.toString();
  const reverse = str.split("").reverse().join("");
  console.log("reverse :>> ", reverse);

  return reverse;
};

const number = 12345;
const reversedNumber = reverseNumber(number);
console.log(reversedNumber);

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const string = "Hello, World!";
const reversedString = reverseString(string);
console.log(reversedString);

const revString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
};
const reversedSring = revString(string);
console.log(reversedSring);

const areAnagram = (str1, str2) => {
  const sort1 = str1.toLowerCase().split("").sort().join("");
  console.log("sort1= :>> ", sort1);
  const sort2 = str2.toLowerCase().split("").sort().join("");
  console.log("sort2= :>> ", sort2);
  return sort1 === sort2;
};

const string1 = "Listen";
const string2 = "Silent";

const result = areAnagram(string1, string2);
console.log(result); // Output: true

const areAnangram = (num1, num2) => {
  const str1 = num1.toString();
  const str2 = num2.toString();
  const sort1 = str1.toLowerCase().split("").sort().join("");
  console.log("sort1= :>> ", sort1);
  const sort2 = str2.toLowerCase().split("").sort().join("");
  console.log("sort2= :>> ", sort2);
  return sort1 === sort2;
};

const number1 = 123;
const number2 = 321;

const results = areAnangram(number1, number2);
console.log(results);

const isPlaindromeNumber = (num) => {
  const str = num.toString();

  const reverseStr = str.split("").reverse().join("");

  return str === reverseStr;
};

const isNumberPalindrome = isPlaindromeNumber(12321);
console.log(isNumberPalindrome);
