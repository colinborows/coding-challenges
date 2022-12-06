const binaryArrayToNumber = arr => {
    // your code
    arr.reverse();
    let binaryVal = .5
    
    let newArr = arr.map((elem, index) => {
      binaryVal *= 2;
      if(elem === 1){
        return binaryVal;
      } else {
        return elem;
      }
    })
    
    return newArr.reduce((acc, curr) => acc + curr);
    
  };