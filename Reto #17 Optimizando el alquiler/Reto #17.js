function optimizeIntervals(intervals) {
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  
  let order = [];
  let min = intervals[0][0];
  let max = intervals[0][1];

  intervals.forEach(e => {
    if(e[0] < max && e[1] > max) {
      max = e[1];
    }
    if(e[0] > max) {
      order.push([min, max]);
      min = e[0];
      max = e[1];
    }
  })
  order.push([min, max])
  console.log(...order);
}