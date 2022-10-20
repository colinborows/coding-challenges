function rentalCarCost(d) {
    let cost = 40 * d
    let rebate = 0
    
    if (d >= 7){
      rebate += 50
    } else if (d >= 3){
      rebate += 20
    }
    
    return cost - rebate
  }