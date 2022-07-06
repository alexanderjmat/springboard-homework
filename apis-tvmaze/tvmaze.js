"use strict";

const $showsList = $("#shows-list");
const $episodesArea = $("#episodes-area");
const $searchForm = $("#search-form");
const show = `http://api.tvmaze.com`
const $episodeList = $('#episodes-list')




/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(term) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  const req = await axios.get(`${show}/search/shows/`, {params: {q : term}});
  const info = req.data;
  const showMap = info.map((value) => {
    if (value.show.image == null) {
      return {id : value.show.id, name : value.show.name, summary : value.show.summary, image : 'https://tinyurl.com/tv-missing'}
    }
    return {id : value.show.id, name : value.show.name, summary : value.show.summary, image : value.show.image.original}

  })
  console.log(showMap);
  return showMap;
}

/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $(
        `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src="${show.image}" 
              alt="Bletchly Circle San Francisco" 
              class="w-25 mr-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button style="background-color: blue" class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>  
       </div>
      `);
    $showsList.append($show); }
    }


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#search-query").val();
  const shows = await getShowsByTerm(term);
  console.log(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) { 
  const data = await axios.get(`${show}/shows/${id}/episodes`);
  const episodeData = data.data;
  const episodesMap = episodeData.map((value) => {
    return {id : value.id, name : value.name, season : value.season, number : value.number}
  })
  populateEpisodes(episodesMap)
}
/** Write a clear docstring for this function... */

function populateEpisodes(episodes) {
  for (let episode of episodes) {
    let li = $(`<li>${episode.name} (season ${episode.season}, episode ${episode.number})</li>`);
    $episodeList.append(li);
  }
  $episodesArea.css('display', 'block')
}

const btn = $('#shows-list');
btn.on('click', 'button', function(e) {
  const epi = e.target.closest('div.Show');
  const id = epi.getAttribute('data-show-id')
  getEpisodesOfShow(id);
})
    


