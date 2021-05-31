import {BaseComponent} from "../baseComponent";
import {Card} from "../card/card";
import {CardsField} from "../cardField/cards-field";
import {delay} from "../../shared/delay";
import {GameTimer} from "../gameTimer/gameTimer";
import {Popup} from "../popup/popup";
import './game.scss';
import '../gameTimer/gameTimer.scss';
import {Button} from "../button/button";
import {IButtonStyleInterface} from "../../models/button-category-model";


const FLIP_DELAY = 1000;

//class newGame create new Game from Cards
export class Game extends BaseComponent {
    private readonly cardsField: CardsField;
    private gameTimer: GameTimer;
    // private buttonStop: Button;
    private activeCard?: Card;
    private isAnimation = false;
    private arrayOfGreenCards: Card[] = [];
    private numberOfFlippedCard: number;
    private popup: Popup;
    private finishButton:Button;


    constructor() {
        super('div', ['game-container']);
        this.cardsField = new CardsField();
        this.gameTimer = new GameTimer();
        // this.buttonStop = new Button();
        this.finishButton=new Button(this.element,{default:"finish-btn",active:"finish-btn-active"},"Play again",false);
        this.popup = new Popup('Congratulation! You WIN !!!','To try again!');
        this.element.append(this.cardsField.element, this.gameTimer.element, this.popup.element
           // this.buttonStop.element
    );
        this.numberOfFlippedCard = this.arrayOfGreenCards.length;


    }

    newGame(images: string[]) {
        this.cardsField.clear();
        const cards = images
            .concat(images)
            .map((url) => new Card(url))
            .sort(() => Math.random() - .5);
        const timer = this.gameTimer;
        cards.forEach((card) => {
            card.element.addEventListener('click', () => this.cardHandler(card));
        });
        this.cardsField.addCards(cards, timer);
        this.gameTimer.draw();
        // this.buttonStop.draw();
    }

    checkIfTheGameComplete(arrayOfGreenCards: Array<Card>) {
        let flippedCards = arrayOfGreenCards.length;
        let cards = document.querySelectorAll('.card-container');
        let modalButton:HTMLElement|null = document.querySelector('.closeModalPopup');
        let numberOfAllCards = Array.from(cards).length;
        if (flippedCards == numberOfAllCards / 2) {
            this.gameTimer._clearTimerId();
            this.popup.init();
            if(this.popup.isOpen){
               console.log('popup is open!!');
              modalButton?.addEventListener("click",()=>{
                  this.popup.closePopup();

              })
           // and clearInterval in TimerGame
            }
            console.log("You are finished the Game");
        } else {
            console.log("not all cards are fined")
        }
    }

    private async cardHandler(card: Card) {
        if (this.isAnimation) return;
        if (!card.isFlipped) return;
        this.isAnimation = true;

        await card.flipToFront();

        if (!this.activeCard) {
            this.activeCard = card;
            this.isAnimation = false;
            return;
        }
        if (this.activeCard.image != card.image) {
            card.showErrorClass();
            this.activeCard.showErrorClass();

            await delay(FLIP_DELAY);

            await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
            this.activeCard.removeErrorClass();
            card.removeErrorClass();
        } else {
            card.showValidClass();
            this.activeCard.showValidClass();
            this.arrayOfGreenCards.push(this.activeCard);
            this.checkIfTheGameComplete(this.arrayOfGreenCards);
        }

        this.activeCard = undefined;
        this.isAnimation = false;
    }
}


