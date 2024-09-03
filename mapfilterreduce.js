// map filter reduce
// map-The map method is creating new array from existing one by applying a function to each element in the  first array 

const nums =[1,2,3,4]
const multipleThree=nums.map((num,index,arr)=>{

})


// How to find duplicate 

function findDuplicates(arr) {
    // Create a Set to keep track of seen elements
    const seen = new Set();
    // Filter the array to find duplicates
    return arr.filter(item => {
      if (seen.has(item)) {
        // If the item is already in the Set, it's a duplicate
        return true;
      } else {
        // Otherwise, add the item to the Set
        seen.add(item);
        return false;
      }
    });
  }
  
  // Test the function with an example array
  const array = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 2, 9, 10, 3];
  const duplicates = findDuplicates(array);
  
  console.log(duplicates); // Output: [1, 2, 2, 3]


  const findDuplicate=(arr)=>{
    const set=new Set();
   
    return arr.filter(item=>{
        if(set.has(item)){
            return true
        }
        else{
            set.add(item);
            return false;
        }
    })
  }

  const arrays = [1, 7, 8,,2,2,2, 10, 3,3];
  const duplicate = findDuplicate(arrays);
  
  console.log(duplicate,">>>duplicate"); 

// Const sort 
 
const sort =(arr)=>{
    return arr.sort((a,b)=>a-b)
}
const sortArray=[9,3,4,5,7,8,0]
const sorts = sort(sortArray)
console.log(sorts,"Sorts")

const descending =(arr)=>{
    return arr.sort ((a,b)=>b-a)
}
const desc=descending(sortArray)
console.log(desc,"dessc")


const sortString =(arr)=>{
    return arr.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()))
}
const string=["Ariya","arish","panad","Viji","shwani","Ash"]
console.log(sortString(string),"String")

const sortStringLength=(arr)=>{
    return arr.sort((a,b)=>a.length-b.length)
}
console.log(sortStringLength(string),"sortStringLength")


const sortReverseString =(arr)=>{
    return arr.sort().reverse()
}
console.log(sortReverseString(string),"sortReverseString")


// How to find unique values in an array?

const getUniqueueValues =(arr)=>{
    return [...new Set(arr)]
}
const uniqueArr=[1,2,5,6,7,7,8,9,3,4,5,5,6,12,18,100]
console.log('uniqueArr :>> ', getUniqueueValues(uniqueArr));

const unquieValues =(arr)=>{
    return arr.filter((item,index)=>arr.indexOf(item)===index)
}
console.log('uniqueArr :>> ', unquieValues(uniqueArr));


// How to find unique values from an Array in sorted order?

const sortedUniqueValues =(arr)=>{
    const UniqueValues =[... new Set(arr)]

    const sortedUniqueValues=UniqueValues.sort((a,b)=>a-b)
    return sortedUniqueValues
}

console.log('sortedUniqueValues', sortedUniqueValues(uniqueArr))

const sortedUnique=(arr)=>{
    const unique=arr.filter((item,index)=>arr.indexOf(item)===index)
    const sortUnique=unique.sort((a,b)=>a-b)
    return sortUnique
}
console.log('sortedUnique', sortedUnique(uniqueArr))



// Find the average of the numbers in the numbered array?


const findMax =(arr)=>{
    return arr.reduce((current,max)=>(current>max ? current:max),arr[0])
}

console.log('findMax :>> ', findMax(uniqueArr));

//How can you uppercase the first character in a string array?
   const upperCaseArray =(arr)=>{
    return arr.map(str=>str.charAt(0).toUpperCase()+str.slice(1))
   }
   const stringArray=["apple","orange","next","diya"]
console.log(' upperCaseArray :>> ',  upperCaseArray(stringArray));



//How to make a sentence out of the given string array?


const makeSentence =(arr)=>{
    return arr.join(' ')
}
const stringArrays = ["This", "is", "a", "sentence"];
console.log(makeSentence(stringArrays)); 


// How to check if an array contains any element of another array?
const containsAny =(arr1,arr2)=>{
    return arr2.some(item => arr1.includes(item))
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 3];
console.log(containsAny(array1, array2));


// ow can you extract a few fields from the given JSON object and form a new array?
const data = [
  { id: 1, name: "John", age: 30, email: "john@example.com" },
  { id: 2, name: "Jane", age: 25, email: "jane@example.com" },
  { id: 3, name: "Doe", age: 35, email: "doe@example.com" }
];


const extract =(arr) =>{
    return arr.map(({id,name})=>({id,name}))
}
const result =extract(data)
console.log('extract :>> ',result);


// Filter the given object based on certain conditions and return the corresponding object?

const users = [
    { id: 1, name: "John", age: 30 ,mark:90},
    { id: 2, name: "Jane", age: 25,mark:60 },
    { id: 3, name: "Doe", age: 35 ,mark:20},
    { id: 4, name: "Smith", age: 40,mark:30 }
  ];
  


  const filterAge =(arr,minAge ,mark)=>{
    return arr.filter(user => user.age>minAge && user.mark <mark )
  }
  console.log("filterAge",filterAge(users,30,45))


//   Given an array of strings, reverse each word in the sentence?

const reverseEachWord =(arr)=>{
    const reverseWord =arr.map(word => word.split('').reverse().join(''))
    return reverseWord 
}
const stringArraysss = ["Hello", "world", "from", "ChatGPT"];
console.log(reverseEachWord(stringArraysss));


// How do you sort and reverse an array without changing the original array?

// reverse of Stribg 

 const reverseString=(str)=>{
   return str.split('').reverse().join('')
 }
 console.log('reverseString :>> ', reverseString("Happy Interview"));


//  Longest Word 


const LongestWord = (sentence) => {
    // Split the sentence into words, not characters
    const words = sentence.split(' ');
    console.log('Words: ', words);
    
    let longest = '';
    
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    
    return longest;
  }
  
  console.log('LongestWord:', LongestWord("I am Ariya"));
  

  //Paliandroe Sentence


  const palindrome= ( sentence )=>{

    const revStr=sentence.split('').reverse().join("")
   
    return revStr===sentence
  }
  console.log(' palindrome :>> ',  palindrome('ada'));

//   Remove Anangram


const anagra =(str1,str2)=>{
    const sortStr1 = str1.toLowerCase().split('').sort().join('');
    const sortStr3 = str2.toLowerCase().split('').sort().join('')
    return sortStr1===sortStr3
}

console.log('object', anagra("listen","silents"))





const countVowels = (str) => {
    const vowelList = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowelList.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Ariya Aeo That")); 
