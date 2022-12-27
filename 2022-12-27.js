function squareDigits(num){
 
    //convert to array
    
    let toSquare = Array.from(String(num), Number);
    
    //square every digit
    
    let squaredArr = toSquare.map(x => x * x);
  
    //concatenate result
    
    let concatNum = Number(squaredArr.join(''));
    
    //return integer
    
    return concatNum;
  }