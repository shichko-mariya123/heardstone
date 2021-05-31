import './cards-field.scss';
import {BaseComponent} from "../baseComponent";
import { Card } from "../card/card";
import {GameTimer} from "../gameTimer/gameTimer";


const SHOW_TIME=5;

export class CardsField extends BaseComponent{
    private cards:Card[]=[];

    constructor() {
        super('div',['cards-field']);
    }
 clear(){
        this.cards=[];
        this.element.innerHTML=''
 }
 addCards(cards:Card[],timer:GameTimer){
        this.cards=cards;
        this.cards.forEach((card)=> this.element.appendChild(card.element));
        setTimeout(()=>{
            this.cards.forEach((card)=>card.flipToBack());
            timer.setTimer();
            },SHOW_TIME*500);
    }

}
