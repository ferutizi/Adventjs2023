function maxGifts(houses) {
  if(houses.length === 0) return 0;
  let maxG = 0;
  const maxHouses = Math.ceil(houses.length / 2);
  let alt = 0;
  
  for(let i = 1; i <= maxHouses; i++) {
    const max = Math.max(...houses);
    const iMax = houses.indexOf(max);
    maxG += max;
    houses.splice(iMax, 1, 0);
    
    if(iMax > 0) {
      alt += houses[iMax - 1];
      houses.splice(iMax - 1, 1, 0);
    } 
    if(iMax < houses.length - 1) {
      alt += houses[iMax + 1];
      houses.splice(iMax + 1, 1, 0);
    }
  }
  console.log(maxG > alt ? maxG : alt);
}

maxGifts([2, 4, 2]) // 4 (4)
maxGifts([3, 4, 3]) // 6 (3 + 3)
maxGifts([4, 5, 1, 0, 1]) // 6 (4 + 1 + 1)
maxGifts([5, 2]) // 5
maxGifts([1]) // 1
maxGifts([0]) // 0
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)