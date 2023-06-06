import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '38ad1c60fe91441e91329ef0ee182771', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
