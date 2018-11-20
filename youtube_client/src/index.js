
import startSearch from './startSearch';


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
document.querySelector('.container').innerHTML = header + videosWrapper;

// Adding event on form submit.

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  startSearch(event);
});
