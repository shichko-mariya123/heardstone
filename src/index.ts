import {App} from './app';
import {GamePage} from "./components/GamePage/gamePage";

window.onload=()=> {
    const application = document.createElement('div');
    application.classList.add('game')
    // @ts-ignore
    document.body.append( application);
    if (!application) throw  Error(" Main element not found");
   new App(application).render();
}



