function main() {

    return (function() {

        const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

        const Suits = {
            SPADES: '♠',
            HEARTS: '​♥',
            DIAMONDS: '♦',
            CLUBS: '♣'
        }

        class Card {
            constructor(face, suit) {
                if(validFaces.includes(face)) {
                    this._face = face;
                } else {
                    console.log('Error');
                }

                if(Object.values(Suits).includes(suit)){
                    this._suits = suit;
                } else {
                    console.log('Error');
                }
            }

            get face(){
                return this._face;
            }
            set face(f){ 
                if(validFaces.includes(f)) {
                    this._face = f;
                } else {
                    console.log('Error');
                }
            }

            get suits() {
                return this._suits;
            }

            set suits(s) {
                if(validFaces.includes(s)) {
                    this._suits = s;
                } else {
                    console.log('Error');
                }
            }
        }

        return {
            Card,
            Suits
        };

    }());
}

let result = main();
let Card = result.Card;
let Suits = result.Suits;

let card = new result.Card('Q', Suits.CLUBS);
card.face = 'A';
card.suit = Suits.DIAMONDS;
let cards2 = new Card('1', Suits.DIAMONDS);
