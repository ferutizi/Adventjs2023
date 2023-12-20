function cyberReindeer(road, time) {
    let currentTime = 2;
    const street = [road];
    let prevPos = '';
    let pos = 2;
  
    for(currentTime; currentTime <= time; currentTime++) {
      let currentRoad = road.split('');
  
      if(road[pos - 1] === '|' && currentTime <= 5) {
        street.push(prevPos);
      } else {
        currentRoad[currentTime - 2] = road[currentTime - 2];
        currentRoad[0] = '.';
        currentRoad[pos - 1] = 'S';
        
        let newRoad = currentRoad.toString().replaceAll(',', '');
        if(currentTime > 5) {
          const roadBarrier = newRoad.replaceAll('|', '*');
          street.push(roadBarrier)
        } else {
          if(road[currentTime] === '|') {
            prevPos = newRoad;
          }
          street.push(newRoad);
        }
        pos = pos + 1;
      }
    }
    return street;
}