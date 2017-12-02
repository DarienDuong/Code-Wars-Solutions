https://www.codewars.com/kata/is-a-number-prime/train/javascript

function isPrime(num) {
 	for(let i = 2; i<num; i++){
		if(num % i === 0) return false
 	} 
	return num > 1
}