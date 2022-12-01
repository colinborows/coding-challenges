// break camelCase
function solution(string) {
 
    let arr = Array.from(string);
    
    let indices = []
    
     arr.forEach((element, index) => {
       if(element === element.toUpperCase()){
         indices.unshift(index)
       }
     })
      
    indices.forEach((element) => {
      arr.splice(element, 0, ' ')
    })
      
    return arr.join('')
      
  }