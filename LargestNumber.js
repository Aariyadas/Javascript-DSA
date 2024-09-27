const numbers = [5, 10, 15, 20, 25]; // Example array
const largestNumberBuiltIn = Math.max(...numbers); // Using built-in method
console.log("Largest Number (Built-in):", largestNumberBuiltIn);



const findLargestNumber = (arr) => {
   

    let largest = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }

    return largest;
};

// Example usage
const numbersArray = [5, 10, 15, 20, 25]; 
const largestNumberCustom = findLargestNumber(numbersArray); 
console.log("Largest Number (Custom Function):", largestNumberCustom);
