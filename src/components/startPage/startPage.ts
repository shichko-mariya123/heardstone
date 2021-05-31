import './startPage.scss'

import {BaseComponent} from "../baseComponent";

import {Button} from "../button/button";


export class StartPage extends BaseComponent{
    startGameButton:Button;

    public onChange: ( button: Button) => void=()=>{};
    
    constructor() {
    super('div',['start-page']);

    this.startGameButton = new Button(this.element,{default:'btn  start-game ',active:'btn active',name:'startGameBtn'},'Start',false)
    this.element.append(this.startGameButton.node);
    this.startGameButton.node.setAttribute('href','/start');
    }

}

