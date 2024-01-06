function distributeGifts(weights) {  
  let newWeights = [];
  weights.forEach((e, i) => {
    let row = [];
    e.forEach((x, ix) => {
      let prom = x ?? 0;
      let el = x !== null ? 1 : 0;
      if(ix > 0 && e[ix-1]) {
        prom += e[ix-1]
        el++
      }
      if(ix < e.length - 1 && e[ix+1]) {
        prom += e[ix+1]
        el++
      }
      if(i > 0 && weights[i-1][ix]) { 
        prom += weights[i-1][ix]
        el++
      }
      if(i < weights.length - 1 && weights[i+1][ix]) {
        prom += weights[i+1][ix]
        el++
      }
      row.push(Math.round(prom/el))
    })
    newWeights.push(row);
  })
  console.log(...newWeights);
}

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
]

distributeGifts(input)