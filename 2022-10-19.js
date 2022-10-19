function countSheeps(arrayOfSheep) {
    let counted = arrayOfSheep.filter((sheep) => sheep)
    return counted.length
  }