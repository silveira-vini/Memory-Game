let game = {

    lockmode: false,
    firstCard: null,
    secondCard: null,
    techs: ["bootstrap", "css", "electron", "firebase", "html", "javascript", "jquery", "mongo", "node", "react"],
    cards: null,

    setCard: function (id) {
        let card = this.cards.filter(card => card.id === id)[0];

        if (card.flipped || this.lockmode) {
            return false;
        }

        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockmode = true;
            return true;
        }

    },

    checkMatch: function () {

        if (!this.firstCard || !this.secondCard) {
            return false;
        }

        return this.firstCard.icon === this.secondCard.icon;


    },

    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockmode = false;
    },

    unflipCards: function () {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();

    },

    checkGameOver() {

        return this.cards.filter(card => !card.flipped).length == 0;

    },

    creatCardsFromTechs: function () {
        this.cards = [];
        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech))
        })
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
    },

    createPairFromTech: function (tech) {
        return [{
            id: this.creatIdWithTech(tech),
            icon: tech,
            flipped: false,
        },
        {
            id: this.creatIdWithTech(tech),
            icon: tech,
            flipped: false,
        }]
    },

    creatIdWithTech: function (tech) {
        return tech + parseInt(Math.random() * 1000);
    },

    shuffleCards: function (cards) {
        for (let index = this.cards.length - 1; index > 0; index--) {
            const indexAleatorio = Math.floor(Math.random() * this.cards.length);
            [this.cards[index], this.cards[indexAleatorio]] = [this.cards[indexAleatorio], this.cards[index]];
        }

        return cards;
    }
}