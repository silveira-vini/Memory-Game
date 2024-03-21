const FRONT = "card_front";
const BACK = "card_back";

let techs = ["bootstrap", "css", "electron", "firebase", "html", "javacript", "jquery", "mongo", "node", "react"];

creatCardsFromTechs(techs);

function creatCardsFromTechs(techs) {

    let cards = [];

    for (let tech of techs) {
        cards.push(createPairFromTech(tech));
    }

    return cards.flatMap(pair => pair);
}

function createPairFromTech(tech) {

    return [{
        id: creatIdWithTech(tech),
        icon: tech,
        flipped: false,
    }, {
        id: creatIdWithTech(tech),
        icon: tech,
        flipped: false,
    }]
}

function creatIdWithTech(tech) {
    return tech + parseInt(Math.random() * 1000);
}

