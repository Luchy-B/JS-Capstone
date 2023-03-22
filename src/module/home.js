/* eslint import/no-cycle: 0 */
import heart from '../Assets/images/heart.png';
import INTERACTIONS from './api.js';

const url = 'https://api.tvmaze.com/shows';
const showsContainer = document.querySelector('.shows-container');

export default class SHOWS {
    static getShows = async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }

    static renderMovies = (movies) => {
      let result = '';
      movies.forEach((movie) => {
        result += `
        <article class="show">
        <div class="img-wrap">
            <img class="show-img" src="${movie.image.medium}" alt="image">
        </div>
        <div class="likes-conatainer">
            <p class="name">${movie.name}</p>
               <img id=${movie.id} class="heart"src=${heart} alt="image">
        </div>
        <div class="likes-value-wrap">
            <p class=value-wrap><span class="value">${movie.likes}</span><span>likes</span></p>
        </div>
        <button id=${movie.id} class="comment-btn comment-button">comments</button>
    </article>
        `;
      });
      showsContainer.innerHTML = result;
    }

    static newMovies = (likes, movies) => {
      const mappedMovies = movies.map((movie) => {
        const likedMovie = likes.find((like) => Number(like.item_id) === Number(movie.id));
        return {
          ...movie,
          likes: likedMovie ? likedMovie.likes : 0,
        };
      });
      SHOWS.allShows = mappedMovies;
      SHOWS.renderMovies(mappedMovies);
    }

    static displayShows() {
      SHOWS.getShows().then((data) => {
        this.allShows = data;
        INTERACTIONS.getLikes().then((likes) => {
          if (likes.length) {
            SHOWS.newMovies(likes, data);
          } else { SHOWS.newMovies(data, data); }
        });
      });
    }
}