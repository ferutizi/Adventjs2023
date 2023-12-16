function findNaughtyStep(original, modified) {
    if(original == modified) return '';
    const longMin = Math.min(original.length, modified.length);

    for (let i = 0; i < longMin; i++) {
        if (original[i] !== modified[i]) {
        return original.length > modified.length ? original[i] : modified[i];
        }
    }

    return original.length > modified.length ? original[longMin] : modified[longMin];
}