function correct(string)
{
    let array = string.split('')
    let corrected = array.map((elem) => {
        if (elem === '5'){
        return 'S'
        } else if (elem === '0'){
        return 'O'
        } else if (elem === '1'){
        return 'I'
        } else {
        return elem
        }
    })
    return corrected.join('')
}