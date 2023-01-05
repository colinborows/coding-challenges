function expressionMatter(a, b, c) {
    const v1 = a + b * c;
    const v2 = (a + b) * c;
    const v3 = a * b * c;
    const v4 = a * (b + c);
    const v5 = a + b + c;
    
    let arr = [v1, v2, v3, v4, v5];
    let max = Math.max(...arr);
    return max;
  }