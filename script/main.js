function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
let counter = 0;

function generateBlocks() {
    const main = document.createElement("main");
    document.body.prepend(main);
    main.style.cssText = `width: 250px; margin:0 auto; display: flex; flex-wrap:wrap;`;
    for (let i = 0; i < 25; i++) {
        const div = document.createElement("div");
        main.prepend(div);
        div.style.cssText = `
        width: 50px;
        height: 50px;
        background-color: ${random_bg_color()};`;
    }
}

// generateBlocks();

function generateBlocksInterval(a) {
    if (counter === 0) {
        generateBlocks();
        counter += 1;
    } else {
        let div = document.getElementsByTagName("div");
        for (let i = 0; i < div.length; i++) {
            div[i].style.backgroundColor = `${random_bg_color()}`;
        }
    }

    setTimeout(generateBlocksInterval, 1000);
}
generateBlocksInterval();
