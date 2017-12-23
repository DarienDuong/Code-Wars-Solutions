https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript

function SumSquares(arr){
    var sum = 0

    function helper(arr){
    	for(var i =0; i<arr.length; i++){
    		if(Array.isArray(arr[i])){
    			helper(arr[i])
    		} else if (typeof arr[i] === "number") {
    			sum += arr[i] * arr[i]
    		}
    	}
    }

    helper(arr)

    return sum
}
