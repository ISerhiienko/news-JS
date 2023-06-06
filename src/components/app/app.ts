import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsItem } from '../view/news/news';
import { SourcesItem } from '../view/sources/sources';

class App {
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesElement: HTMLElement | null = document.querySelector('.sources');

        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data: NewsItem[]) => this.view.drawNews(data))
            );
        }
        this.controller.getSources((data: SourcesItem[]) => this.view.drawSources(data));
    }
}

export default App;
