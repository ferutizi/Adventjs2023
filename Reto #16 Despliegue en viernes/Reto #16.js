function transformTree(tree) {
  function generate(i) {
    if(i >= tree.length || tree[i] === null) return null;
    return {
      value: tree[i],
      left: generate(i*2+1),
      right: generate(i*2+2)
    };
  }
  const res = generate(0);
  return res;
}

transformTree([3, 1, 0, 8, 12, null, 1])