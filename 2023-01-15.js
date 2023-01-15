function validatePIN (pin) {
 
    for (let i = 0; i < pin.length; i++){
      if(isNaN(pin[i]) || pin[i] == "\n"){
        return false;
      }
    }
  
    if(pin.length === 4 || pin.length === 6){
      return true;
      } else {
        return false;
      }
    
    //return true or false
  }
  
  
  console.log(validatePIN("123'"));