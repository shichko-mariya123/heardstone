import {BaseComponent} from "../baseComponent";
import './gameTimer.scss';
export class GameTimer extends BaseComponent {
  timerId?:number|NodeJS.Timeout;
  seconds:number;
  minutes:number;

    constructor() {
        super('div', ['game-timer']);
        this.element.innerHTML = `<div class="timer">TIME</div>`;
        this.seconds = 0;
        this.minutes = 0; }

    draw() {
        let container = document.querySelector('.game-container');
        container?.appendChild(this.element);
    }
    setTimer() {
        this.timerId = setInterval(this._updateCounterElement.bind(this), 1000);
    }
    _clearTimerId() {
        clearTimeout(<NodeJS.Timeout>this.timerId);
    };
    _updateCounterElement() {
        let timer = document.querySelector('.timer');
        if (timer) {
            timer.innerHTML = `${this.minutes} : ${this.seconds}`;
        }
        this.seconds++;
        if (this.seconds == 60) {
            this.minutes++;
            this.seconds = 0;
        }
    }
}


























