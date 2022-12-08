function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let sum = classPoints.reduce((acc, curr) => acc + curr)
    let average = sum / classPoints.length;
    
    return yourPoints > average ? true : false;
    }