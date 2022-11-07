function DNAtoRNA(dna) {
    let dnaArr = dna.split('')
    let conversion = dnaArr.map((element) => {
      if (element === 'T'){
        return 'U'
      } else {
        return element
      }
    })
    return conversion.join('')
  }