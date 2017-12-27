https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
  var zero = []
  var other = []
  for(var el of arr){
  	if(el === 0){
  		zero.push(el)
  	} else {
  		other.push(el)
  	}
  }
  return other.concat(zero)
}