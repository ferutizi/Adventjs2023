function createChristmasTree(ornaments, height) {
    let tree = ornaments[0].padStart(height) + '\n';
    let currentOr = 0;
    function nextOr(current) {
        if(currentOr + 1 < ornaments.length) {
            currentOr++;
        } else {
            currentOr = 0;
        }
        return currentOr;
    }
    for(let i = 2; i <= height; i++) {
        if(i !== height) {
            tree += ' '.repeat(height - i);
        }
        for(let j = 1; j < i; j++) {
            tree += ornaments[nextOr(currentOr)] + ' ';
        }
        tree += ornaments[nextOr(currentOr)] + '\n';
    }
    tree += ' '.repeat(height - 1) + '|';
    console.log(tree);
  }

/* 
    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3
    |
*/

createChristmasTree("123", 5)