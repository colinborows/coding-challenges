function oddOrEven(array) {
   
    if (array === undefined || array.length == 0) {
        array = [0];
    }
      
      let sum = array.reduce((acc, curr) => acc + curr)
       
       if(sum % 2 == 0){
         return 'even'
       } else {
         return 'odd'
       }
    }