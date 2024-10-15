// Number of Vowels check in an String

//code 1 using function keyboard:
function vowelCheck(w){
  let word = w.toLowerCase();
  let count = 0;
    for(let i = 0; i<word.length; i++){
      if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u"){
        count ++;
      }
    }
    return count;
}
console.log(vowelCheck("SHYAM"));


//code 2 using an Arrow Function :
const vowelCheck2 = (w) => {
  let word2 = w.toLowerCase();
  let count2 = 0;
    for(let i = 0; i<word2.length; i++){
      if(word2[i] == "a" || word2[i] == "e" || word2[i] == "i" || word2[i] == "o" || word2[i] == "u"){
        count2 ++;
      }
    }
    return count2;
}
console.log(vowelCheck2("DEEPAK"));


//code 1 's improved verson suggested by ChatGPT :
/*function vowelCheck(w) {
  let word = w.toLowerCase();
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  
  return count;
}

console.log(vowelCheck("SHYAM"));
*/
