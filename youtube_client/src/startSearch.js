import { query, statsQuery } from './variables';
import httpGet from './httpGet';
import videoRender from './videoRender';
import Pager from './components/pager';

export default class Search {
  constructor() {
    this.nextPageToken = '';
    this.searchString = '';
    this.pager = {};
    this.videos = [];
  }

  startSearch(searchString) {
    if (searchString != this.searchString) {
      this.searchString = searchString;
      this.nextPageToken = '';
      this.pager = new Pager(3, 15);
      this.videos = [];
    }

    const formatedString = encodeURIComponent(this.searchString);
    const searchUrl = query + '&q=' + formatedString
      + (this.nextPageToken ? '&pageToken='+ this.nextPageToken : '');

    httpGet(searchUrl)
    .then((response) => {
      const result = JSON.parse(response);
      this.nextPageToken = result.nextPageToken;
      this.videos = this.videos.concat(result.items);

      const ids = result.items.map(item => item.id.videoId);
      const statsUrl = statsQuery + `&id=${ids.join(',')}`;

      httpGet(statsUrl)
        .then((response) => {
          const statsResult = JSON.parse(response);
          this.render(result, statsResult);
        });
    });
  }

  nextPage() {
    if (this.pager.isLastPage() && this.nextPageToken) {
      this.startSearch(this.searchString);
      this.pager.openNextPage();
    } else {
      this.pager.openNextPage();
    }
  }

  prevPage() {
    this.pager.openPrevPage();
  }

  getCurrentPage() {
    this.pager.getCurrentPage();
  }

  render(result, statsResult) {
    this.pager.setTotalCount(this.videos.length);
    
    const videos = result.items.map((item, key) => videoRender(result.items[key], statsResult.items[key].statistics));
    document.querySelector('.videosWrapper').setAttribute('style', 'width:calc('+this.pager.getTotalCount()+' *100%);');
    videos.map(item => document.querySelector('.videosWrapper').appendChild(item));
    this.pager.render();
  }
}
