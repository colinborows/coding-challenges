var number=function(array){
  
    let newArray = array.map((element, index) => { 
      return `${index + 1}: ${element}`;
    });
    
    return newArray;
  }