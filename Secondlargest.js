const findSecondLargestNumber = (arr) => {
   

    let largest, secondLargest;

   
    if (arr[0] > arr[1]) {
        largest = arr[0];
        secondLargest = arr[1];
    } else {
        largest = arr[1];
        secondLargest = arr[0];
    }

    // Loop through the array starting from the third element
    for (let i = 2; i < arr.length; i++) {
        const num = arr[i];

        if (num > largest) {
            secondLargest = largest; // Update second largest
            largest = num; // Update largest
        } else if (num > secondLargest && num < largest) {
            secondLargest = num; // Update second largest if current num is less than largest
        }
    }

    return secondLargest; // Return the second largest number
};

// Example usage
const numbersArray = [5, 10, 15, 20, 25];
console.log("Second Largest Number:", findSecondLargestNumber(numbersArray));


const findSecondBiggestNumber = (array) => {
    if (array.length < 2) {
        return null; // Not enough elements for second largest
    }

    // Sort the array in descending order and remove duplicates
    const distinctArray = [...new Set(array)].sort((a, b) => b - a);

    return distinctArray[1]; // Return the second element (second largest)
};

// Example usage
const numberList = [5, 10, 15, 20, 25];
console.log("Second Largest Number:", findSecondBiggestNumber(numberList));
