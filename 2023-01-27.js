function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    const arrayFromCurrentDate = currentDate.split(" ");
    const arrayFromExpirationDate = expirationDate.split(" ");
    
    let currentDateMonth = arrayFromCurrentDate[0];
    let currentDateDay = arrayFromCurrentDate[1].replace(/,/i, '');
    let currentDateYear = arrayFromCurrentDate[2];
    
    let expirationDateMonth = arrayFromExpirationDate[0];
    let expirationDateDay = arrayFromExpirationDate[1].replace(/,/i, '');;
    let expirationDateYear = arrayFromExpirationDate[2];
    
    let currentMonth = months.indexOf(arrayFromCurrentDate[0]);
    let expirationMonth = months.indexOf(arrayFromExpirationDate[0]);
    
    console.log(`${currentMonth} ${expirationMonth}`)
    
    
    
      console.log(enteredCode + ' compared to ' + correctCode)
    console.log(`${currentDateMonth} ${currentDateDay} ${currentDateYear} compared to ${expirationDateMonth} ${expirationDateDay} ${expirationDateYear}`)
    console.log(Number(currentDateDay) , Number(expirationDateDay))
    
    
  if ((enteredCode !== correctCode)||
      currentDateYear > expirationDateYear ||
      (currentDateYear === expirationDateYear && currentMonth > expirationMonth) ||
      (currentDateYear === expirationDateYear && currentMonth === expirationMonth && Number(currentDateDay) > Number(expirationDateDay))){
    return false;
    }else{
      return true
  }
}