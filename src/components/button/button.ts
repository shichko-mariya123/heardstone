import Control from "../../control";
import './button.scss';
import {IButtonStyleInterface} from "../../models/button-category-model";


export class Button extends Control {
    private disabled?:Boolean;
    private state?: Boolean;
    private styles: IButtonStyleInterface;
    public  onSelect: ((textContent:string) => void) | undefined;
    public onClick: (() => void) | undefined;
    public onChange: ((state: Boolean) => void) | undefined;

    constructor(parentNode: HTMLElement | null, styles: IButtonStyleInterface, caption: string = '',disabled:boolean) {
        super(parentNode, 'button', styles.default, caption);
        this.styles = styles;
        this.disabled=disabled;
        this.node.onclick = () => {
            this.setState();
            if (this.node.textContent != null) {
                this.onSelect && this.onSelect(this.node.textContent);
            }
            let path = this.node.getAttribute('href');
            this.onClick && this.onClick();
        }
    }

    setState(newState?: Boolean) {
        this.state = newState === undefined ? !this.state : newState;
        this.refresh();
        this.onChange && this.onChange(this.state);
    }
    refresh() {
        this.node.className = this.state ? this.styles.active : this.styles.default;
    }
}




