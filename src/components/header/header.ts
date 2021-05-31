import {BaseComponent} from "../baseComponent";
import './header.scss';

import {Button} from "../button/button";
import {Routing} from "../routing";
import {Popup} from "../popup/popup";
import {RegisterForm} from "../RegisterForm/RegisterForm";

export class Header extends BaseComponent{
       registerButton:Button;
       aboutPageButton:Button;
       settingsButton:Button;
       homePageButton:Button;
       bestScoreButton:Button;
       registerForm:RegisterForm;
       private routing: Routing;
       private  popup:Popup
      // arrButtons:Button[];

    public onChange: ( button: Button) => void=()=>{};


     constructor() {
         super('div', [ 'header' ]);
         this.registerButton = new Button(this.element,{default:'btn  register',active:'btn active',name:'registerBtn'},'Register',false);
         this.settingsButton=new Button(this.element,{default:'btn ',active:'btn active',name:'settingsBtn'},'Settings',false)
         this.aboutPageButton = new Button(this.element,{default:'btn  about',active:'btn active',name:'about'},'About Page',false) ;
         this.homePageButton = new Button(this.element,{default:'btn  home',active:'btn active',name:'home'},'Home Page',false) ;
        this.bestScoreButton=new Button(this.element,{default:'btn  best',active:'btn active',name:'best'},'Best Score',false) ;
      //присваисваем  дата атрибут//
         this.element.append(this.aboutPageButton.node,this.settingsButton.node,this.registerButton.node);
        this.aboutPageButton.node.setAttribute('href','/about');
        this.settingsButton.node.setAttribute('href','/settings');
        this.homePageButton.node.setAttribute('href','');
        this.bestScoreButton.node.setAttribute('href','/bestScore');
        this.registerForm=new RegisterForm();
        this.popup=new Popup('Please, Register New Gamer','');
        this.routing=new Routing();

        // this.arrButtons=('button'))

     }


    render() {
       let arrBtn=Array.from(this.element.querySelectorAll('button'))
        console.log(arrBtn)

        this.aboutPageButton.onClick = () => {
            this.routing._locationResolver('/about');
                this.onChange && this.onChange(this.aboutPageButton);
            }

        this.homePageButton.onClick=()=>{
            this.routing._locationResolver('/');
        }
        // this.startGameButton.onClick=()=>{
        //        // this.gamePage.start()
        // }
        this.bestScoreButton.onClick=()=>{
            this.routing._locationResolver('/bestScore')
        }
        this.settingsButton.onClick=()=>{
            this.routing._locationResolver('/settings');
        }
        this.registerButton.onClick=()=>{
            document.body.style.overflow='hidden';
           this.popup.init();
           this.registerForm.render();

        }
        this.popup.addFormRegisterToPopup();

    }

 }