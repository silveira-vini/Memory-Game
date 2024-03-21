const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon"

let techs = ["bootstrap", "css", "electron", "firebase", "html", "javascript", "jquery", "mongo", "node", "react"];

let cards = null;

startGame();

function startGame() {
    cards = creatCardsFromTechs(techs);
    shuffleCards(cards);
    
    initializeCards(cards);

}

function initializeCards(cards) {

    let gameBoard = document.getElementById("gameBoard");
    
    cards.forEach( card => {
        let cardElement = document.createElement("div");
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;
        
        createCardContent(card, cardElement);


        cardElement.addEventListener("click", flipCard);
        gameBoard.appendChild(cardElement);

        
    });


}

function createCardContent (card, cardElement) {

        createCardFace(FRONT, card, cardElement);
        createCardFace(BACK, card, cardElement);

}

function createCardFace(face, card, element) {
    let cardElementFace = document.createElement("div");
    cardElementFace.classList.add(face);

    
    if (face === FRONT) {
        let iconElement = document.createElement("img");
        iconElement.classList.add(ICON);
        iconElement.src = "./images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);

    } else {
        let iconElement = document.createElement("img");
        // iconElement.classList.add(ICON);
        iconElement.src = "./images/question/question-sign.png";
        cardElementFace.appendChild(iconElement);

    }

    element.appendChild(cardElementFace);


}





function shuffleCards(cards) {
    for (let index = cards.length - 1; index > 0; index--) {
        const indexAleatorio = Math.floor(Math.random() * cards.length);
        [cards[index], cards[indexAleatorio]] = [cards[indexAleatorio], cards[index]];
    }

    return cards;
}


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

function flipCard() {

    this.classList.add("flip");

}