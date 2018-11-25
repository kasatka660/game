import header from './components/header';
import container from './components/container';
import videosWrapper from './components/videosWrapper';
import Search from './startSearch';

export default class App {
  constructor () {
    this.search = new Search();
  }

  init() {
    document.body.innerHTML = container;
    document.querySelector('.container').innerHTML = header + videosWrapper;
    this.addFormListener();
  }

  addFormListener() {
    this.form = document.querySelector('form');
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.search.startSearch(this.getInputValue());
    });
  }

  getInputValue() {
    return document.getElementsByName('youtubeSearch')[0].value;
  }
}