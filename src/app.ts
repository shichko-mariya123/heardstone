import {StartPage} from "./components/startPage/startPage";
import {Wrapper} from "./components/wrapper";
import {GamePage} from "./components/GamePage/gamePage";
import {SettingPage} from "./components/SettingsPage/settingPage";
import {Header} from "./components/header/header";
import {BestScore} from "./components/BestScore Page/bestScore";
import {Routing} from "./components/routing";
import './style.scss';




export  class App {
    private readonly  header:Header;
    private gamePage: GamePage;
    private startPage:StartPage;
    private wrapper: Wrapper;

    constructor(private  readonly rootElement:HTMLElement) {
        this.header = new Header();
        this.wrapper=new Wrapper();
        this.startPage = new StartPage();
        this.gamePage = new GamePage();
        this.header.render();
    }

    render(){
        this.rootElement.appendChild(this.header.element);
        this.rootElement.appendChild(this.wrapper.element)
        this.wrapper.element.appendChild(this.startPage.element);
        this.startPage.startGameButton.onClick=()=>{
            this.wrapper.element.innerHTML='';
            this.wrapper.element.appendChild(this.gamePage.element);
            this._gameInit()
        }
    }

        _gameInit(){
            this.gamePage.start();
        }
    }







