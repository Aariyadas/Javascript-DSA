// Count Occurenence of Word

// Function should  return number of wordd the number of times the word

const countChar = (words, char) => {
  words = words.toLowerCase();
  char = char.toLowerCase();

  totalCount = words.split("").reduce((accum, curChr) => {
    if (curChr === char) {
      accum++;
    }
    return accum;
  }, 0);

  return totalCount
};

console.log(countChar("MissisippI", "I"));


const countCharMatch =(words,char)=>{
    words=
}

