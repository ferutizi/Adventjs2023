function checkIsValidCopy(original, copy) {
  if(original.length !== copy.length) return false;
  const notDegraded = [' ', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const degraded = ['#', '+', ':', '.', ' '];
  for(let i = 0; i < original.length; i++) {
    const orChar = original[i];
    const copyChar = copy[i];
    const ascii = orChar.charCodeAt();
    const isMayus = ascii > 64 && ascii < 91;
    const isMinus = ascii > 96 && ascii < 123;
    if(orChar !== copyChar) {
      if(notDegraded.includes(orChar)) {     
        return false;
      }
      if(isMayus) {
        if(copyChar !== orChar.toLowerCase() && !degraded.includes(copyChar)) {
          return false;
        }
      }
      if(isMinus && !degraded.includes(copyChar)) {
        return false;
      }
      if(degraded.includes(orChar) && orChar !== ' ') {
        if(degraded.indexOf(copyChar) < degraded.indexOf(orChar)) {
          return false;
        }
      }
    }
  }
  return true;
}

checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')