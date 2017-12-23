https://www.codewars.com/kata/scramblies/train/javascript

// Solved in O(n)

function scramble(str1, str2){
    var tracker = {}
    for(let i=0; i<str1.length; i++){
        if(str1[i] in tracker){
            tracker[str1[i]]++
        } else {
            tracker[str1[i]] = 1
        }
    }
    for(let letter of str2){
        if(letter in tracker){
            tracker[letter]--
            if(tracker[letter] < 0){
                return false
            }
        } else {
            return false
        }
    }
    return true
}