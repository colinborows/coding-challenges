function sumMix(x){
  
    const convertedToNum = x.map(element => parseInt(element))
    const sum = convertedToNum.reduce((acc, iter) => acc + iter, 0)
    return sum
    
   }