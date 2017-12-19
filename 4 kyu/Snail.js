https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

snail = function(array) {
   var newArr = []
  
  while(arr.length > 0){
    if(arr.length === 1){
      return newArr.concat(arr[0])
    } else {
      newArr = newArr.concat(arr.shift())
      // Since mutated the state of the array, we start at index 0 now
      for(var i =0; i<arr.length; i++){
        newArr.push(arr[i].pop())
      }
      // Can't reverse on only one element so this will return an error
      newArr = newArr.concat(arr.pop().reverse())
      for(var j = arr.length -1; j >= 0; j--){
        newArr.push(arr[j].shift())
      }
    }
  }
  return newArr
} 
