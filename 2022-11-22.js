function expandedForm(num) {
    // write number in expanded form
    
    let arrayOfNum = String(num).split('').map((element) => parseInt(element))
    
    let numLength = arrayOfNum.length
    let zeroes
    let array = []
    
    for (let i = 0; i < numLength; i++){
      zeroes = Math.pow(10, (numLength - i - 1))
      
      if(arrayOfNum[i] != 0){
        array.push(zeroes * arrayOfNum[i])
      }
    }
    
    return array.join(' + ')
    
  }