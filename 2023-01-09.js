function countPositivesSumNegatives(input) {
  
    console.log(input);
    if (input == null || input.length == 0){
      return [];
    }else{
    
    let positives = input.filter(item => item > 0);
    let negatives = input.filter(item => item < 0);
    
    let negativeSum = negatives.reduce((acc, c) => acc + c, 0);
      
    return ([positives.length, negativeSum]);
    }
  }