function fakeBin(x){
  
    let digits = x.split('')
    
    let processed = digits.map((element) => {
      if(element < 5){
        return 0;
      } else {
        return 1;
      }    
    })
    
    return processed.join('')
    
  }