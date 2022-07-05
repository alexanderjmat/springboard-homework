"use strict";

const $showsList = $("#shows-list");
const $episodesArea = $("#episodes-area");
const $searchForm = $("#search-form");
const api = 'http://api.tvmaze.com'


/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(term) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  const res = await axios.get(`${api}/search/shows/`, {params: {q : term}})
  const info = res.data;
  const showInfo = info.map((value) => {
    return value.show;
  })
  populateShows(showInfo);
}


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();
  console.log(shows);

  for (let show of shows) {
    getEpisodesOfShow(show.id)
    if (show.image !== null) {
      const $show = $(
        `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src=${show.image.original} 
              alt="Bletchly Circle San Francisco" 
              class="w-25 mr-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="${show.id}">
               Episodes
             </button>
           </div>
         </div>  
       </div>
      `);
      $(`.${show.id}`).css('background-color', 'blue');
      $showsList.append($show);
    }
    if (show.image == null) {
      const $show = $(
        `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src="https://tinyurl.com/tv-missing" 
              alt="Bletchly Circle San Francisco" 
              class="w-25 mr-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="${show.id}">
               Episodes
             </button>
           </div>
         </div>  
       </div>
      `);
      $(`.${show.id}`).css('background-color', 'blue');
      $showsList.append($show);
    } 
  }

}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#search-query").val();
  const shows = await getShowsByTerm(term);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) {
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);
  const info = res.data;
  const basicInfo = info.map((value) => {
    return {show_id : id, episode_id : value.id, name : value.name, season : value.season, number : value.number}
  })
  populateEpisodes(basicInfo);
}
/** Write a clear docstring for this function... */

function populateEpisodes(episodes) {
  const id = episodes[0].show_id;
  const ul = $('#episodes-list')
  const pageId = $('#shows-list').children();
  if (ul.children().length == 0) {

  }
  for (let child of pageId) {
    if (child.attributes['data-show-id'].value == id) {
      for (let episode of episodes) {
        const li = $(`<li class=${id} id=${episode.episode_id}>Season: ${episode.season}, Episode: ${episode.number}, Title: ${episode.name}</li>`);
        ul.append(li);
      }
    }
  }
  let btn = $('#shows-list')
  btn.on('click', 'button', function(e) {
  const id = e.target.className;
  console.log(id);
  getEpisodesOfShow(id);
  })
  // const section = $('#episodes-area')
  // section.css('display', 'block');


}


