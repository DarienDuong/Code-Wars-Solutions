https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript

function list(names){
  var output = []
  if(names.length ===0){
    return ''
  }
  if(names.length === 1){
    return names[0].name
  } 
  for(var i=0; i < names.length -1; i++){
    output.push(names[i].name)
  }
  return output.join(", ") + " & " + names[names.length -1].name
}