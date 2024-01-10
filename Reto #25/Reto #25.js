function travelDistance(map) {
  const newMap = map.split("\n");

  function findPos(santa) {
    const y = newMap.findIndex(r => r.includes(santa));
    if(y != -1) return {y, x: newMap[y].indexOf(santa)};
  }

  let santaPos = findPos("S");
  let kidPos;
  let next = 1;
  let distance = 0;

  while(kidPos = findPos(next)) {
    distance += Math.abs(santaPos.x - kidPos.x);
    distance += Math.abs(santaPos.y - kidPos.y);
    santaPos = kidPos;
    next++;
  }
  return distance;
}

const map = `.....1....
..S.......
..........
....3.....
......2...`

travelDistance(map);