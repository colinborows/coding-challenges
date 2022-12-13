function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    
    let square = Math.sqrt(sq)
    
    if(Number.isInteger(square)){
      return Math.pow(square + 1, 2);
    }
    return -1;
  }