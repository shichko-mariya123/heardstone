
import {BaseComponent} from "../baseComponent";
import './settingPage.scss';

export class SettingPage extends BaseComponent{
    constructor() {
        super('div',['settings-field']);
        this.element.innerHTML=`
         <h1 class="about-field__title">Choose you own settings</h1>
        
    <div>level EASY</div>
    <div>level MEDIUM</div>
    <div>level HARD</div>`

    }

}
