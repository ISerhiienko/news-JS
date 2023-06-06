import './sources.css';

export interface SourcesItem {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

class Sources {
    draw(data: SourcesItem[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item: SourcesItem) => {
            const sourceClone: HTMLElement = <HTMLElement>sourceItemTemp?.content.cloneNode(true);

            (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
            (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (<HTMLElement>document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
