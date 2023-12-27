function getIndexsForPalindrome(word) {
    const reversedWord = word.split('').reverse().toString().replaceAll(',', '');
    if(word === reversedWord) return [];
    const mistakes = [];
    let finished = false;
    for(let i = 0; i < word.length && !finished; i++) {
        if(word[i] !== reversedWord[i]) {
            mistakes.push(i);
            if(mistakes.length === 2) {
                finished = true;
            }
        }
    }
    const firstMistake = word[mistakes[0]];
    const secondMistake = word[mistakes[1]];

    //  v ota r ato r
    const center = Math.trunc(word.length / 2);
    if(word.length % 2 !== 0) {
        // A veces falla
        if(word.length - mistakes[0] - 1 === mistakes[1] && mistakes[1] < center) {
            if(firstMistake === word[center]) {
                return [center, word.length - mistakes[0] - 1];
                
            } else {
                return [word.length - mistakes[0] - 1, center];
            }
        }
        if(word.length - mistakes[1] - 1 === mistakes[0]) {
            if(secondMistake === word[center]) {
                return [word.length - mistakes[1] - 1, center]
            } else {
                return [center, word.length - mistakes[0] - 1]
            }
        }

    }

    let newWord = word.split('');
    
    newWord[mistakes[0]] = secondMistake;
    newWord[mistakes[1]] = firstMistake;
    
    newWord = newWord.toString().replaceAll(',', '');
    const newReversed = newWord.split('').reverse().toString().replaceAll(',', '');
    
    return newWord === newReversed ? mistakes : null;
}

getIndexsForPalindrome('rotaratov')


// null
// [1, 3]
// null