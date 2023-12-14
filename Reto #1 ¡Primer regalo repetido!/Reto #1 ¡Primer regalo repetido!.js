function findFirstRepeated(gifts) {
    const arr = new Set()
    for(let i = 0; i < gifts.length; i++) {
      if(arr.has(gifts[i])) {
        return(gifts[i])
      }
      arr.add(gifts[i]);
    }
  return -1
}