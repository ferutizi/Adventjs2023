function decode(message) {
    let stack = [];
    let result = '';

    for (let i = 0; i < message.length; i++) {
        if (message[i] === '(') {
            stack.push(result);
            result = '';
        } else if (message[i] === ')') {
            const reversed = result.split('').reverse().join('');
            result = stack.pop() + reversed;
        } else {
            result += message[i];
        }     
    }

    return result;
}