function findBalancedSegment(message) {
  let maxSegment = [];
  let maxBalance = 0;
  message.forEach((e, index) => {
    let zero = 0;
    let one = 0;
    for(let i = index; i < message.length; i++) {
      message[i] === 0 ? zero++ : one++;
      if(zero === one && zero > maxBalance) {
        maxSegment = [index, i];
        maxBalance = zero;
      }
    }
  })
  console.log(maxSegment);
}

findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
findBalancedSegment([1, 1, 0])
findBalancedSegment([1, 1, 1])
