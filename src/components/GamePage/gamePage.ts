import {Game} from "../../components/game/game";
import {ImageCategoryModel} from "../../models/image-category-modal";
import {BaseComponent} from "../baseComponent";

export class GamePage extends BaseComponent {
    private readonly game: Game;

    constructor() {
        super('div', ['game-page']);
        this.game = new Game();
        this.element.append(this.game.element);

    }

    async start() {
        const res = await fetch('./images.json');
        const categories: ImageCategoryModel[] = await res.json();
        const level1 = categories[0];
        const level2=categories[1]
        console.log(level1.category)
        const images = level2.images.map((name) =>
            `${level2.category}/${name}`);
        this.game.newGame(images);
    }
}
