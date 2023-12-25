function adjustLights(lights) {
    let lightToChange = "🟢";
    let staticLight = "🔴";
    let greenLights = 0;
    let redLights = 0;
    let lightNumber = 0;
    let changes = 0;
    let positions = 0;
    let startStatic = true;

    lights.forEach(e => {
        e === "🟢" ? greenLights++ : redLights++;
    });

    if(greenLights > redLights) {
        lightToChange = "🟢"
        staticLight = "🔴";
        lightNumber = redLights;
    } else {
        lightToChange = "🔴";
        staticLight = "🟢";
        lightNumber = greenLights;
    }

    //determines if the most of static lights are in even indices
    lights.forEach((e, i) => {
        if(e === staticLight && (i === 0 || i % 2 === 0)) {
            positions++
        }
    });
    positions > lightNumber / 2 ? startStatic = true : startStatic = false;

    lights.forEach((e, i) => {
        if(startStatic) {
            if(i === 0 || i % 2 === 0) {
                e === lightToChange ? changes++ : null;
            } else {
                e === staticLight ? changes++ : null;
            }
        } else {
            if(i === 0 || i % 2 === 0) {
                e === staticLight ? changes++ : null;
            } else {
                e === lightToChange ? changes++ : null;
            }
        }
    });
    console.log(changes);
}

adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])