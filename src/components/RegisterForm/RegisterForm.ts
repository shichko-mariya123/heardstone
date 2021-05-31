import Control from "../../control";
import {BaseComponent} from "../baseComponent";
import {Button} from "../button/button";
import {makeLogger} from "ts-loader/dist/logger";
import {User} from "../User";


export class RegisterForm extends BaseComponent{
    submitButton: Button;
    nameInput: HTMLInputElement | null;
    lastNameInput: HTMLInputElement | null;
    emailInput: HTMLInputElement | null;
    // user: User;
    isSubmit:Boolean;

    constructor() {
        super('form', ['register-form']);
        this.submitButton = new Button(this.element, {default: "btn", active: 'btn active'}, 'Submit',true);
        this.nameInput = this.element.querySelector('#name');
        this.lastNameInput = this.element.querySelector('#lastName');
        this.emailInput = this.element.querySelector('#email');
        this.isSubmit=false;

        this.submitButton.onClick = () => {
            this.validationOnLetters();
            if(this.validationOnLetters()){
                this.getObject();
            }
              this.isSubmit=true;
           alert("You are registrated. you can start  the game")

        }
    }

    getNameValue() {
        this.nameInput = this.element.querySelector('#name');
        if(this.nameInput?.value===""){
            this.setError("")
        }
        return this.nameInput?.value;
    }
    getLastNameValue() {
        this.lastNameInput = this.element.querySelector('#last-name');
        return this.lastNameInput?.value;

    }
    getEmailValue() {
        this.emailInput = this.element.querySelector('#email');
        return this.emailInput?.value;
    }

    setError(err: string | null) {
        if (err === null) {
            this.element.classList.remove('error');
        } else {
            this.element.classList.add('error')
        }
    }

    //получаем юзера
    getObject() {
       let user={
           name: this.getNameValue(),
           lastName:this.getLastNameValue(),
           email:this.getEmailValue()
       };
        return user;
    }


    render(){
        this.element.innerHTML = `
         <label class="label-auth">
                   <span>Name --></span>
                    <input id="name" type="text" required>
           </label>
            <label class="label-auth">
                    <span>Last Name --></span>
                    <input id="last-name" type="text" required>
             </label>
             <label class="label-auth">
                    <span>E-mail --></span> 
                   <input id="email" type="emai" required>                                         
               </label>    
            <div class="modal-footer">
                <div class="footer-buttons">
<!--                    <button class=" button-login" type="submit">Add User</button>                   -->
                </div>
            </div>`;

        this.element.append(this.submitButton.node);

        return this.element;
    }


    //Validation
  validationOnLetters(){
        const letters = /^[A-Za-zА-я]+$/;
        if(this.nameInput?.value.match(letters))
        {
            return true;
        }
        else
        {
           this.nameInput?.focus();
        alert("name should be only letters")
           return false;
        }
    }
}





// class Button extends Control{
//     public node!: HTMLButtonElement;
//     public  onClick!:()=>void;
//
//     constructor(parentNode:HTMLElement,caption:string) {
//         super(parentNode,'button','register-btn',caption);
//         this.node.onclick=()=>{
//             this.onClick&&this.onClick();
//         }
//     }
// }
// let readAllButton= new Button(document.body,'Register')
// console.log(readAllButton)

// export  class ValidForm {
//     node: HTMLElement;
//     constructor(parentNode:HTMLElement | null =null, tagName:string='div',className:string='',content:string='') {
//         const el=document.createElement(tagName);
//         el.className=className;
//         el.textContent=content;
//         parentNode && parentNode.appendChild(el);
//         this.node=el;
//     }
// }
//
// export class Input extends ValidForm{
//     private name: string;
//     private caption:any;
//     private error: ValidForm;
//     private field:ValidForm;
//
//     constructor(parentNode=null, name:string,onValid:boolean) {
//         super(parentNode);
//         this.name=name;
//         this.caption=new ValidForm(this.node,'div');
//         this.field=new ValidForm(this.node,'input');
//         this.error=new ValidForm(this.node,'div');
//         this.field.node.addEventListener('input',()=>{
//             console.log("get value from input");
//             if (this.validate) {
//                 this.setError(this.validate(this.getValue()));
//             }
//             if(this.onInput){
//                 this.onInput();
//             }
//         });
//         this.validate = onValidate ;
//     }
//
//     getValue() {
//         return this.field.node.value;
//     }
//
//     setError(err: string | null) {
//
//         if (err === null){
//             this.error.node.textContent = 'ok';
//             this.field.node.classList.remove('invalid');
//         } else {
//             this.error.node.textContent = err;
//             this.field.node.classList.add('invalid')
//         }
//
//     }
//
// }
// class Form extends ValidForm {
//     isValid: boolean;
//     inputs: Input[];
//     constructor(parentNode:HTMLElement | null, onValidate: { (values: any): { name1: string | null; name2: string | null; name3: string | null; name4: string | null; }; (values: any): { name1: string | null; name2: string | null; name3: string | null; name4: string | null; }; }) {
//         super(parentNode)
//         this.validate = onValidate;
//         this.inputs: = [];
//         this.isValid= false;
//     }
//
//     getObject() {
//         let result = {};
//         this.inputs.forEach((elem) => result[elem.name] = elem.field.node.value);
//         return result;
//     }
//
//     addInput(name:string) {
//         const newInput = new Input(this.node, name);
//         newInput.onInput = () => {
//             this.setErrors(this.validate(this.getObject()));
//         }
//         this.inputs.push(newInput);
//     }
//
//     setErrors(obj) {
//         Object.keys(obj).forEach((key) => {
//             let inp = this.inputs.find(input => input.name === key);
//             if (inp) {
//                 inp.setError(obj[key]);
//             }
//         })
//         let lastValid = this.isValid;
//         this.isValid = Object.keys(obj).every((key) => {
//             return !obj[key]
//         })
//         if (!this.isValid){
//             this.node.classList.remove('valid');
//         } else {
//             this.node.classList.add('valid')
//         }
//         if(lastValid !== this.isValid){
//             this.onChangeValidState && this.onChangeValidState(this.isValid);
//         }
//     }
// }
// const validator =  (values) => {
//     console.log(values)
//     let param = ((
//             (values['name1'].length > values['name2'].length) &&
//             (values['name2'].length > values['name3'].length)
//         ) ? null : 'error'
//     )
//     return {
//         'name1': param,
//         'name2': param,
//         'name3': param,
//         'name4': (Number.isNaN(+values['name4']) ? 'error' : null)
//     };
// };
// const form = new Form(document.body, validator)
//
// form.onChangeValidState = (ee:)=> console.log(ee)
// form.addInput('name1');
// form.addInput('name2')
// form.addInput('name3')
// form.addInput('name4')
//
//
//



