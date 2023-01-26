function descendingOrder(n){
    let numbersArray = Array.from(String(n), Number);
    let sortedArray = numbersArray.sort((a, b) => b-a);
    let outputString = sortedArray.join('')
    return parseInt(outputString)
  }