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



  
  const inputStrings = "Hello World, this is a test string!";
  const vowelCountss = countVowels(inputStrings);
  console.log(vowelCountss,"sdbheiudie");

  const countVowelss = (str) => {
    // Define an array of vowels (both lowercase and uppercase)
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    // Initialize the counts object
    let counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  
    // Loop through each character in the input string
    for (let char of str) {
      // Check if the character is in the vowels array
      for (let vowel of vowels) {
        if (char === vowel) {
          // Increment the count for the corresponding lowercase vowel
          counts[vowel.toLowerCase()]++;
          break; // Exit the inner loop once a match is found
        }
      }
    }
    
    return counts;
  };
  
  const inputString = "Hello World, this is a test string!";
  const vowelCounts = countVowels(inputString);
  console.log(vowelCounts,"Build in");
  


