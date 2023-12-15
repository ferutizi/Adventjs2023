function manufacture(gifts, materials) {
    const newMaterials = materials.split('');
    const giftsConstruibles = [];
    const mySet = new Set();
    newMaterials.forEach(e => mySet.add(e));

    gifts.forEach(e => {
      let construible = true;
      for(let i = 0; i < e.length && construible; i++) {
        if(!mySet.has(e[i])) {
          construible = false;
        }
        if(i == e.length - 1 && construible) {
          giftsConstruibles.push(e);
        }
      }
    })
  return giftsConstruibles;
}