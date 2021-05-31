import {BaseComponent} from "../baseComponent";
import './bestScore.scss';

export class BestScore extends BaseComponent{
    constructor() {
        super('div',['best-score']);
        this.element.innerHTML=`
         <h1 class="about-field__title">THE BEST SCORE:</h1>
         <span class="about-field__separator"></span>
    <div>Name and sername : score</div>
    <div>Name and sername : score</div>
    <div>Name and sername : score</div>`

    }

}
