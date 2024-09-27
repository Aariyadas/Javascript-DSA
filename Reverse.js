const reverseString = (str) => {
    return str.split('').reverse().join('');
  };
  
  const reverseNumber = (num) => {
    const reversedNum = num.toString().split('').reverse().join('');
    return reversedNum ;
  };
  
  // Example usage
  const stringToReverse = "Hello, World!";
  const reversedString = reverseString(stringToReverse);
  console.log("Reversed String:", reversedString); // Output: !dlroW ,olleH
  
  const numberToReverse = 12345;
  const reversedNumber = reverseNumber(numberToReverse);
  console.log("Reversed Number:", reversedNumber); // Output: -54321
  

console.log("_________________________________________");


  const reverseStrings = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed =reversed+ str[i]; 
    }
    return reversed;
  };
  
  const reverseNumbers = (num) => {
    let reversed = 0;
    let isNegative = num < 0; 
  
    
    while (num > 0) {
      const lastDigit = num % 10; // Get the last digit
      reversed = reversed * 10 + lastDigit;
      num = Math.floor(num / 10); 
    }
    
    return isNegative ? -reversed : reversed; 
  };
  
  // Example usage
  const stringToReverses = "Hello, World!";
  const reversedStrings = reverseStrings(stringToReverse);
  console.log("Reversed String:", reversedString); // Output: !dlroW ,olleH
  
  const numberToReverses = -12345;
  const reversedNumbers = reverseNumbers(numberToReverse);
  console.log("Reversed Number:", reversedNumber); // Output: -54321
  