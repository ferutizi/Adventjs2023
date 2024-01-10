function getStaircasePaths(steps, maxJump) {
  let count = 0;
  let sequences = [];
  let actualJump = 1;
  let initial = [];
  let index = steps.length - 2;

  for(let i = 1; i < steps.length; i++) {
    initial.push(actualJump);
    sequences.push(initial);
  }
  if(maxJump === 1) return sequences;

  while(actualJump <= maxJump) {
    let copy = initial;
    if(index !== 0) {
      copy.pop();
      copy[index] = actualJump++
      index--;
      sequences.push(copy)
    }
  }
  return sequences;
}



getStaircasePaths(2, 1) // [[1, 1]]
getStaircasePaths(3, 3) // [[1, 1, 1], [1, 2], [2, 1], [3]]
getStaircasePaths(5, 1) // [[1, 1, 1, 1, 1]]
getStaircasePaths(5, 2)

/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/