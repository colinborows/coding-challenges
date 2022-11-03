function DNAStrand(dna){
    let dnaArray = dna.split('');
    let mirrorArray = dnaArray.map((element, index) => {
      if(element === 'A'){
        return 'T';
      } else if (element === 'T'){
        return 'A';
      } else if (element === 'G'){
        return 'C';
      } else if (element === 'C'){
        return 'G';
      }
    })
      return mirrorArray.join('');  
  }