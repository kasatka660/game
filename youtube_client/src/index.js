import App from './app';

const app = new App();
app.init();

/*import startSearch from './startSearch';

// Variables for every part of html-page.
const header = `
  <header>
    <a href="#"><img class="logo" src="images/youtube_logo.png" alt="youtube"></img></a>
    <i class="fas fa-search"></i>
    <form>
      <input type="search" name="youtubeSearch" placeholder="What are you looking for?">
    </form>
  </header>
`;


const container = `
  <div class="container">
  </div>
`;

const videosWrapper = `
  <main>
    <section class="videosWrapper">
    </section>
  </main>
`;

// Adding all variables into body.

document.body.innerHTML = container;
document.querySelector('.container').innerHTML = header + videosWrapper ;

// Adding event on form submit.
let totalCount = 0;

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  startSearch(event);
  totalCount = 15;
});

document.querySelector('.videosWrapper').addEventListener('mousedown', lock);
document.querySelector('.videosWrapper').addEventListener('touchstart', lock);
document.querySelector('.videosWrapper').addEventListener('mouseup', move);
document.querySelector('.videosWrapper').addEventListener('touchend', move);

function unify(event) { 
  return event.changedTouches ? event.changedTouches[0] : event;
};

let x0= null;

function lock(event) {
  x0 = unify(event).clientX;
};


let page = 1;

function move(event) {
  if (x0 || x0 === 0) {
    let dx = unify(event).clientX - x0;
    let s = Math.sign(dx);
    x0 = null;
   
    if (s < 0 && page < 5) {
      page++;
      console.log(page);
    } else if (s > 0 && page > 1) {
      page--;
      console.log(page);
    } else if (page*3 === totalCount) {
       startSearch(event, s);
       totalCount += 15;
       page++;
    }

    const slides = document.getElementsByClassName('video');
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].setAttribute('style', 'transform:translateX(-' + ((page-1)*1200 + 5*page) + 'px)');
    }
   //startSearch(event, s);
    
  }
};



document.querySelector('.videosWrapper').addEventListener('touchmove', event => {event.preventDefault()}, false);
*/