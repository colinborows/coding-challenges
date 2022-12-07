var number = function(busStops){
    let difference = busStops.map(element => element[0] - element[1])
    let sum = difference.reduce((acc, curr) => acc + curr)
    return sum;
  }