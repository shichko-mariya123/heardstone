import {BaseComponent} from "../baseComponent";
import './card.scss';

const FLIP_CLASS ='flipped';


export class Card extends BaseComponent {
    isFlipped = false;


    constructor(readonly image: string) {
        super('div', ['card-container']);
        this.element.innerHTML = `
            <div class="card">
               <div class="card__front" style="background-image: url('./images/${image}')"></div>
               <div class="card__back"></div>           
           `;

    }

    flipToBack() {
        this.isFlipped = true;
        return this.flip(true);

    }

    flipToFront() {
        this.isFlipped = false;
        return this.flip();
    }

    showErrorClass() {
        this.element.classList.add('error');

    }

    showValidClass() {
        this.element.classList.add('valid')
    }

    removeErrorClass() {
        this.element.classList.remove('error');
    }

    private flip(isFront = false): Promise<void> {
        return new Promise((resolve) => {
            this.element.classList.toggle(FLIP_CLASS, isFront);
            this.element.addEventListener('transitionend', () => resolve(), {
                once: true,
            });
        })
    }

}
