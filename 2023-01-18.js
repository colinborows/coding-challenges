function evenOrOdd(number) {
    let newNumber = Math.abs(number);
    if(number % 2 == 0 || number == 0){
    return "Even"
   }else{
     return "Odd"
   }
  }