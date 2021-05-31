
import {BaseComponent} from "../baseComponent";
import './aboutPage.scss';

export class AboutPage extends BaseComponent{
    constructor() {
        super('div',['about-field']);
        this.element.innerHTML=`
         <h1 class="about-field__title">How to play</h1>
         <span class="about-field__separator"></span>
    <div>1. Register new player in game</div>
    <div>2. Configure your game settings</div>
    <div>3. Start you new game! Remember card positions and match it before times up.</div>`

    }

}
