function openOrSenior(data){
    // ...  
   let output = data.map(function (element, index){
     if(element[0] >= 55 && element[1] > 7){
       return 'Senior'
     } else {
       return 'Open'
     }
   })
   return output;
  }