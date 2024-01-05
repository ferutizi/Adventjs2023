function revealSabotage(store) {
  store.forEach((e, ix) => {
    e.forEach((x, i) => {
      if(x === ' ') {
        e[i] = 0;
        e[i] += +(e[i-1] === '*')        
        e[i] += +(e[i+1] === '*')
        if(ix > 0) {
          e[i] += +(store[ix-1][i] === '*')
          e[i] += +(store[ix-1][i-1] === '*')
          e[i] += +(store[ix-1][i+1] === '*')
        }
        if(ix < store.length - 1) {
          e[i] += +(store[ix+1][i] === '*')
          e[i] += +(store[ix+1][i-1] === '*')
          e[i] += +(store[ix+1][i+1] === '*')
        }
        e[i] > 0 ? e[i] = e[i].toString() : e[i] = ' '
      }
    })
  })
  console.log(...store);
}