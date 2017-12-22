https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript

function realSize(arr) {
  // Force be with you, code warrior!
  var num = 0
  
  function helper(arr){
      for(var i =0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            helper(arr[i])
        } else{
            if(typeof arr[i] === "number"){
                console.log(arr[i])
                num += 1
            }
        }
      }
  }

  helper(arr)
  
  return num;
}