//Longest Word in a string
// 


const LongestWord=(str)=>{
if (str.trim().length===0){
    return false
}
//Split gives as array if ('') we get each words ('
// ') we get each words
let eachWords=str.split(' ');
// Sort to compare for comaprison

// 1)Sort in asending order and return last element
// const sort=eachWords.sort((a,b)=> a.length-b.length)
// console.log('strArr :>> ',sort);
// return sort.at(-1)


// 2 DECESINDING ORDER 
// const sort =eachWords.sort((a,b)=>(b.length-a.length))
// console.log('strArr :>> ',sort);
// return sort[0]

// 3 fOR eACH mETHOD
const sort=eachWords.reduce((acc,cuurent) =>acc.length <cuurent.length ? cuurent:acc)
return sort
}

//console.log("---Longest Word---",LongestWord("The Longest Word is LongestWord this"))



const Longest = (str) => {
    let longestWord = '';
    let currentWord = '';

    for (let i = 0; i <= str.length; i++) {
        // Check if we are at the end of the string or if the current character is a space
        if (i === str.length || str[i] === ' ') {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = ''; // Reset currentWord for the next word
        } else {
            currentWord += str[i]; // Build the current word
        }
    }

    return longestWord;
}

console.log("---Longest Word---", Longest("The Longest Word is LongestWord in buildINFunction this"));
