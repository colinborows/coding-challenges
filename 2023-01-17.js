function digitize(n) {
    const arr = Array.from(String(n));
    arr.reverse();
    const output = arr.map(function(str){
      return parseInt(str);
    });
    
    return output;
  }