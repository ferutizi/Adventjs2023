function organizeChrismastDinner(dishes) {
    const ingredients = new Set();
    let repeatedIng = new Set();
    dishes.forEach(e => {
        for(let i = 1; i < e.length; i++) {            
            ingredients.has(e[i]) && !repeatedIng.has(e[i]) && repeatedIng.add(e[i]);
            ingredients.add(e[i]);
        }
    });

    const repeatedIngr = [];
    repeatedIng.forEach(v => repeatedIngr.push([v]));
    repeatedIngr.sort();
    
    repeatedIngr.forEach(e => {
        dishes.forEach(x => {
            x.find(i => i === e[0]) && e.push(x[0]);
        })
        const ext = e.shift();
        e.sort();
        e.unshift(ext);
    })
    console.log(...repeatedIngr);
}

const dishes = [
    ["gingerbread", "flour", "ginger", "sugar"],
    ["glazed ham", "ham", "honey", "sugar", "vinegar"],
    ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
    ["vegetable soup", "carrot", "potato", "onion", "garlic"],
    ["fruit punch", "apple juice", "orange juice", "sugar"]
]

organizeChrismastDinner(dishes)