function find_average(array) {
    if (array.length === 0 ){
      return 0
    }
    let sum = 0
    array.forEach(el =>{
        sum += el
        })
    return sum / array.length
  }