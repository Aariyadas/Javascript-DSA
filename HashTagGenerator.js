// Hash Tag Generator 
// Inplement a function to generateHashTag from a given Input string 
// The input string should be converted to hash tag format where each word is captialized and concatenated together without space

const generateHash=(str)=>{
    if(str.length>280 || str.trim().length ===0){
        return false
    }
    str=str.split(' ')

    // This line iterates over each word in the array (str.map()) and replaces the first letter of each word with its capitalized version.
// currentElement[0] refers to the first letter of the word.
// currentElement[0].toUpperCase() converts the first letter to uppercase.
// replace() replaces the first character of the word with its uppercase version.
str=str.map((currentElement)=>currentElement.replace(currentElement[0],currentElement[0].toUpperCase()))
   str=`#${str.join("")}`;

   console.log('str', str)
   return str
   
}

console.log('generateHash :>> ', generateHash("my name is Ariya"));
// op ="#MyNameIsAriya"



const generateHashes = (str) => {
    // Split by spaces to get individual words
    str = str.split(' ');
    
    // Capitalize the first letter of each word and join them
    str = str.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    
    // Concatenate the words and prepend a hash symbol
    str = `#${str.join('')}`;
    
    return str;
}

console.log('generateHashes :>> ', generateHashes('my name is arish')); 
// Expected output: "#MyNameIsArish"


