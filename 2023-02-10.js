function sumArray(array) {
 
    if(!array || !array.length || array.length == 1){
      return 0
    }
    
    let min = (Math.min(...array))
    let max = (Math.max(...array))
    let sum = array.reduce(add, 0)
    
    function add(acc, i){
      return acc + i;
      }
    
    return sum - min - max;
  }