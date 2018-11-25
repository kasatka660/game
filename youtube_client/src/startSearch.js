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
      console.log(this.nextPageToken);
      this.videos = result.items;

      const ids = result.items.map(item => item.id.videoId);
      const statsUrl = statsQuery + `&id=${ids.join(',')}`;

      httpGet(statsUrl)
        .then((response) => {
          const statsResult = JSON.parse(response);
          this.render(result, statsResult);
        });
    });
  }

  render(result, statsResult) {
    this.pager.setTotalCount(this.videos.length);
    this.pager.openNextPage();

    const videos = result.items.map((item, key) => videoRender(result.items[key], statsResult.items[key].statistics));
    videos.map(item => document.querySelector('.videosWrapper').appendChild(item));
  }
}
