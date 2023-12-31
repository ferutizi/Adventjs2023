function autonomousDrive(store, movements) {
  let pos;
  let floor;
  
  store.forEach((e, i) => {
    const robotIndex = e.indexOf('!');
    if(robotIndex !== -1) {
      floor = i;
      pos = robotIndex;
    }
  })

  const initialFloor = floor;
  const len = store[floor].length;
  const newInicio = store[initialFloor].replace('!', '.');
  store[initialFloor] = newInicio;
  
  movements.forEach(e => {    
    const next = store[floor][pos + 1];
    const prev = store[floor][pos - 1];
    const up = store[floor - 1] && store[floor - 1][pos];
    const down = store[floor + 1] && store[floor + 1][pos];
    switch (e) {
      case 'R':
        if(pos < len - 1 && next === '.') {
          pos++
        }
        break;
      case 'L':        
        if(pos > 0 && prev === '.') {
          pos--;
        }
        break;
      case 'D':
        if (floor + 1 < store.length && down === '.') {
          floor++;
        }
        break;
      case 'U':
        if (floor - 1 >= 0 && up === '.') {
          floor--;
        }
        break;
    }
  })
  
  store[floor] = store[floor].substring(0, pos) + '!'
    + store[floor].substring(pos + 1);

  console.log(store);
}