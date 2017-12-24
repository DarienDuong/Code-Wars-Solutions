https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str){
	var capitalize = false
	var output = ""
	for(let i=0; i<str.length; i++){
		if(str[i] === "-" || str[i] === "_"){
			capitalize = true
		} else {
			if(capitalize){
				output += str[i].toUpperCase()
				capitalize = false
			} else {
				output+= str[i]
			}
		}
	}
	return output
}