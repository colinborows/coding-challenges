function countBy(x, n) {
    let z = [];
    
    let iterator = x
    
    for (let i = 0; i < n; i ++){
      z.push(x);
      x += iterator;
    }
    
    return z;
  }