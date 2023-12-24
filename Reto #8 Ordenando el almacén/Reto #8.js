function organizeGifts(gifts) {
    const sortedGifts = gifts.replace(/(\d+)([a-zA-Z])/g, '$1 $2 ').split(' ');
    let organized = '';
    sortedGifts.pop();
    for(let i = 0; i < sortedGifts.length; i++) {
        const numberOfGift = Number(sortedGifts[i]);
        const typeGift = sortedGifts[i + 1];
        let remainingGifts = numberOfGift;
        if(remainingGifts >= 50) {
            numberOfPales = Math.floor(remainingGifts / 50);
            remainingGifts = remainingGifts % 50;
            const pales = ('[' + typeGift + ']').repeat(numberOfPales);
            organized = organized + pales;
        }
        if(remainingGifts >= 10) {
            NumberOfBoxes = Math.floor(remainingGifts / 10);
            remainingGifts = remainingGifts % 10;
            const boxes = ('{' + typeGift + '}').repeat(NumberOfBoxes);
            organized = organized + boxes;
        }
        const bags = remainingGifts > 0 ? '(' + typeGift.repeat(remainingGifts) + ')' : '';
        organized = organized + bags;
        i = i++
    }
    return organized;
}

organizeGifts("70b120a4c");
//{cajas} = 10
//[palé] = 5cajas
//(bolsas) = 1111