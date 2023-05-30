const wordsjson=require("./words.json")
 console.log(words)

 function allWords (words){
    console.log(words);
 }
 
 function firstTenWords(words){
    for(i=1; i<10; i++) { 
    console.log(words[i]) 
    }    
}

function nextTenWords(words){
    for(i=10;i<20; i++){
    console.log (words[i])
}
    }

function firstXWord(words){
    for(i=0; 1<x; i++){
    console.log(word[i])
     }
    }

function subsetOfWords(words,x,y){
    for(i=x; i<y; i++){
     console.log(words[i])
        }
    }
function sortWords(words){
    return words.sort()
}
function wordWQ(words){
    return words.filter(word=>words.includes(`q`))
}
  
    function findWordsWithLetter(words) {
        return words.filter(word => word.includes(process.argv[2]))
      }
      console.log(findWordsWithLetter(words, process.argv[2]))