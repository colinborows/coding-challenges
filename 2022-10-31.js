function removeExclamationMarks(s) {
    let arr = s.split('')
    let newArr = arr.filter(elem => elem != '!');
    return newArr.join('')
  }