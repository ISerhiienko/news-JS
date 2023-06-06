import AppLoader from './appLoader';
import { SourcesItem } from '../view/sources/sources';
import { NewsItem } from '../view/news/news';

interface SourcesData {
    status: string;
    totalResults: number;
    sources: SourcesItem[];
}

interface ArticleData {
    status: string;
    articles: NewsItem[];
}

type controllerFunc<T> = (data?: T) => void;

class AppController extends AppLoader {
    getSources(callback: controllerFunc<SourcesData>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: controllerFunc<ArticleData>) {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;
