import key from './key';
import httpGet from './httpGet';
import videoRender from './videoRender';

// Function starting after the form was submited.
export default function startSearch(event) {
  const searchQuery = document.getElementsByName("youtubeSearch")[0].value;
  const formatedQuery = encodeURIComponent(searchQuery);
  const theUrl = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=15&q=${formatedQuery}`;
  httpGet(theUrl)
    .then(response => {
      const json = JSON.parse(response);
      const ids = json.items.map(item => item.id.videoId);
      const statsUrl = `https://www.googleapis.com/youtube/v3/videos?key=${key}&id=${ids.join(',')}&part=statistics`;
      httpGet(statsUrl)
        .then(response => {
          const json2 = JSON.parse(response);
          const videos = json.items.map((item, key) => videoRender(json.items[key], json2.items[key].statistics));
          document.querySelector('.videosWrapper').innerHTML = videos.join('');
        });

     });
}; 
