function maxDistance(movements) {
  const mov = movements.split('');
  let count = 0;
  let asterisk = 0;
  mov.forEach(m => {
    if(m === '*') {
        asterisk = asterisk + 1;
    } else {
      m === '>' ? count = count + 1 : count = count - 1;
    }
  });
  if(count > 0) {
    count = count + asterisk;
  } else {
    count = count - asterisk;
  }
  return Math.abs(count);
}