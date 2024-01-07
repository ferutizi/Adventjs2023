function compile(code) {
  let count = 0;
  let lastMarker = -1;
  for(let i = 0; i < code.length; i++) {
    if(code[i] === '¿' && count <= 0) {
      i = code.indexOf('?', i)
    }
    if(code[i] === '<' && lastMarker !== -1) {
      code = code.slice(0, i) + code.slice(i + 1);
      i = lastMarker;
    }
    if(code[i] === '%') lastMarker = i;
    count += +(code[i] === '+');
    count -= +(code[i] === '-');
    count *= +(code[i] === '*' ? 2 : 1);
  }
  console.log(count);
}