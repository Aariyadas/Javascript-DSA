const swapArrays = (arr1, arr2) => {
   
    const newArr1 = [...arr1]; 
    const newArr2 = [...arr2]; 
    
    
    return [newArr2, newArr1]; 
  };
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  
  const [swappedArray1, swappedArray2] = swapArrays(array1, array2);
 console.log(swappedArray1); // Output: [4, 5, 6]
console.log(swappedArray2);



const swapArrayss = (arr1, arr2) => {
    // Create a temporary variable to hold the first array
    const temp = arr1;
    
    // Assign the second array to the first array
    arr1 = arr2;
    
    // Assign the temporary variable (original first array) to the second array
    arr2 = temp;
    
    // Return the swapped arrays as new arrays
    return [arr1, arr2];
  };
  
  const array11 = [1, 2, 3];
  const array22 = [4, 5, 6];
  
  // Swap the arrays
  const [swappedArray11, swappedArray22] = swapArrayss([...array11], [...array22]);
  
  console.log(swappedArray1); // Output: [4, 5, 6]
  console.log(swappedArray2); // Output: [1, 2, 3]
    
      const swapUsingTemp = (a, b) => {
        console.log("Before swap:", "a =", a, "b =", b);
        
        // Use a temporary variable to swap
        let temp = a;
        a = b;
        b = temp;
      
        console.log("After swap:", "a =", a, "b =", b);
        return [a, b];
      };
      
      let num1 = 5;
      let num2 = 10;
      
      [num1, num2] = swapUsingTemp(num1, num2);
      