function calculateTime(deliveries) {
  const deadLine = 25200;
  let totalTime = 0;

  deliveries.forEach(e => {
    const hours = (Number(e.slice(0, 2)) || 0) * 3600;
    const minutes = (Number(e.slice(3, 5)) || 0) * 60;
    const seconds = Number(e.slice(6, 8)) || 0;
    totalTime += hours + minutes + seconds;
  });

  let secondsDiff = Math.abs(totalTime - deadLine);

  let hoursDiff = Math.floor(secondsDiff / 3600);
  secondsDiff -= hoursDiff * 3600;

  let minutesDiff = Math.floor(secondsDiff / 60);
  secondsDiff -= minutesDiff * 60;

  let diff = (totalTime - deadLine < 0 ? '-' : '') +
    hoursDiff.toString().padStart(2, '0') + ':' +
    minutesDiff.toString().padStart(2, '0') + ':' +
    secondsDiff.toString().padStart(2, '0');

  return diff;
}

calculateTime(['00:10:00', '01:00:00', '03:30:00'])

/* calculateTime(['02:00:00', '05:00:00', '00:30:00'])

calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
])  */

// '-02:20:00'
// '00:30:00'
// '-05:29:00'