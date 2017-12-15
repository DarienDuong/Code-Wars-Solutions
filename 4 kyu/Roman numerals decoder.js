https://www.codewars.com/kata/roman-numerals-decoder/train/javascript

function solution(roman){
  var table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  var counter = 0
  
  for(let i = 0; i<string.length; i++){
    if(table[string[i]] < table[string[i+ 1]]){
      counter -= table[string[i]]
    } else{
      counter += table[string[i]]
    }
  }
  return counter
}