function repeatStr (n, s) {
  
    let newString = s;
    
    for (let i = 1; i < n; i++) {
      newString += s;
    }
    
    return newString;
  }