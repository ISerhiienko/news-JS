import './news.css';

export interface NewsItem {
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    source: {
        name: string;
    };
}

class News {
    draw(data: NewsItem[]): void {
        const news: NewsItem[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item: NewsItem, idx: number) => {
            const newsClone: DocumentFragment = <DocumentFragment>newsItemTemp?.content.cloneNode(true);

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            if (idx % 2) {
                const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');
                if (newsItem) {
                    newsItem.classList.add('alt');
                }
            }

            const newsMetaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
            if (newsMetaPhoto) {
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const newsMetaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
            if (newsMetaAuthor) {
                newsMetaAuthor.textContent = item.author || item.source.name;
            }

            const newsMetaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
            if (newsMetaDate) {
                newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const newsDescriptionTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
            if (newsDescriptionTitle) {
                newsDescriptionTitle.textContent = item.title;
            }

            const newsDescriptionSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
            if (newsDescriptionSource) {
                newsDescriptionSource.textContent = item.source.name;
            }

            const newsDescriptionContent: HTMLElement | null = newsClone.querySelector('.news__description-content');
            if (newsDescriptionContent) {
                newsDescriptionContent.textContent = item.description;
            }

            const newsReadMoreLink: HTMLAnchorElement | null = newsClone.querySelector('.news__read-more a');
            if (newsReadMoreLink) {
                newsReadMoreLink.setAttribute('href', item.url);
            }

            fragment.append(newsClone);
        });

        const newsContainer: HTMLElement | null = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
