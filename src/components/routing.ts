import {StartPage} from "./startPage/startPage";
import {SettingPage} from "./SettingsPage/settingPage";
import {AboutPage} from "./About Page/aboutPage";
import {GamePage} from "./GamePage/gamePage";
import {BestScore} from "./BestScore Page/bestScore";
import {Header} from "./header/header";
//
// const DEFAULT_ROUTE:{name:string, component:Function} = {
//     'name':'default',
//     'component':()=>{
//         return new StartPage();
//         console.log('default')
//     }
// }
//
// const ROUTING:{name:string, component:Function}[] = [
//     {
//         name: 'about',
//         component: () => {
//             return new GamePage();
//             console.log('about')
//         }
//     },
//     {
//         name: 'bestScore',
//         component: () => {
//             return new BestScore();
//             console.log('bestscore')
//         }
//     },
//     {
//         name: 'settings',
//         component: () => {
//             return new SettingPage();
//         }
//     },
//
// ]
//
//
// export class Router {
//     private currentRouteName: string;
//     public currentRoute: { name: string, component: Function } | undefined;
//     private onRoute: () => void;
//
//     constructor(onRoute: (() => void)) {
//         this.currentRouteName = 'default';
//         this.currentRoute = DEFAULT_ROUTE;
//         this.onRoute = onRoute;
//         this.initRoutes();
//     }
//
//     initRoutes(): void {
//         window.onpopstate = () => {
//             this.currentRouteName = window.location.hash.slice(1);
//             this.currentRoute = ROUTING.find((route) => route.name === this.currentRouteName);
//             this.onRoute();
//             return this.currentRoute;
//         };
//     }
// }
//
//





export class Routing {
    aboutPage: AboutPage;
    private  startPage: StartPage;
    private gamePage: GamePage;
    private  settingsPage:SettingPage;
    private bestScorePage:BestScore;
    container?:HTMLElement|null;
    constructor() {
        this.startPage = new StartPage();
        this.aboutPage = new AboutPage();
        this.gamePage = new GamePage();
        this.settingsPage = new SettingPage();
        this.bestScorePage = new BestScore();

    }

    _locationResolver = (location: string) => {
        console.log("location in resovlver" , location)
        let container=document.querySelector('.main-container')
        switch (location) {
            case '/':
                if(container)container.innerHTML=`
               <div class="start-page">
               ${this.startPage.element.innerHTML}
               </div>`
                break;
            case '/about':
               if(container)container.innerHTML=`
               <div class="about-field">
               ${this.aboutPage.element.innerHTML}
               </div>`
              break;
            case '/settings':
                if(container)container.innerHTML=`
               <div class="settings-field">
               ${this.settingsPage.element.innerHTML}
               </div>`
                break;
            case '/bestScore':
                if(container)container.innerHTML=`
               <div class="best-score">
               ${this.bestScorePage.element.innerHTML}
               </div>`
                break;
            case '/start':
               //  if(container)container.innerHTML=`
               // <div class="game-page">
               // ${this.gamePage.element.innerHTML}
               // </div>`
                break;
        }
    }
}


