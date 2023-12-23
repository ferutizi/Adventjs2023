function drawGift(size, symbol) {
    const rods = size * 2 - 1;

    if(size === 1) return '#\n';
    if(size === 2) return ' ##\n###\n##\n';  

    let gift = '';
    const start = '#' + symbol.repeat(size - 2) + '#';
    const top = "#".repeat(size).padStart(rods, ' ') + '\n';
    const bottom = "#".repeat(size) + '\n';

    gift = gift + top;
    for(let i = 2; i < rods; i++) {
        if(i < size) {
            gift = gift + ' '.repeat(size - i) + start + symbol.repeat(i - 2) + '#\n';
        } else if(i == size) {
            gift = gift + '#'.repeat(size) + symbol.repeat(size - 2) + '#\n';
        } else {
            gift = gift + start + symbol.repeat(rods - i - 1) + '#\n';
        }
    }
    gift = gift + bottom;

    return gift;
}

drawGift(5, '+');