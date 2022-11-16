function removeEveryOther(arr){
    let filtered = arr.filter((elem, index) => index % 2 == 0)
    return filtered
  }