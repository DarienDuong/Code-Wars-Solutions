https://www.codewars.com/kata/vowel-count/train/javascript

function getCount(str) {
  var vowelsCount = 0;
  var vowel = new Set(['a', 'e', 'i', 'o', 'u'])
  for(var letter of str){
    if(vowel.has(letter)){
      vowelsCount += 1
    }
  }
  return vowelsCount;
}