import {BaseComponent} from "../baseComponent";
import {Button} from "../button/button";
import './popup.scss';
import {RegisterForm} from "../RegisterForm/RegisterForm";


const OPEN_CLASS='open';

export class Popup extends BaseComponent {
    private modalTitle: string;
    content?: string | undefined;
    isOpen: boolean = false;
    private closeButton: Button;
    registerForm:RegisterForm;

    constructor(title: string, content?: string) {
        super('div', ['modal']);
        this.modalTitle = title;
        this.content = content;
        this.closeButton = new Button(this.element, {default: 'btn',active:'btn active'}, 'Close',false);
       this.registerForm=new RegisterForm();
        this.element.innerHTML = `  
   <div class="modal-content">     
            <div class="modal-title">${this.modalTitle}</div>
            <div class="modal-form">${this.content}</div> 
            <div class="placeForForm"></div>  
            <div class="closeModal-field"></div>                  
        </div>
         `;
        this.closeButton.onClick = () => {
            this.closePopup();

        }
    }


        init(){
            let container = document.querySelector('.main-container');
            container?.appendChild(this.element);
            this.isOpen = true;
            this.element.classList.add(OPEN_CLASS);
            this.addCloseButtonToModal();
        }

        addCloseButtonToModal(){
            let modal = document.querySelector('.closeModal-field');
            if (modal) modal.appendChild(this.closeButton.node)

        }


        closePopup(){
            this.element.classList.remove(OPEN_CLASS);
        }
        addFormRegisterToPopup(){
        this.registerForm.render();
         let placeToInner=this.element.querySelector('.placeForForm');
           if(placeToInner) placeToInner.appendChild(this.registerForm.element)
        }


}
