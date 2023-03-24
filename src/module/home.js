/* eslint import/no-cycle: 0 */
import heart from '../Assets/heart.png';
import Interactions from './api.js';

const url = 'https://api.tvmaze.com/shows';
const showsContainer = document.querySelector('.shows-container');
const count = document.querySelector('#count');

export default class Shows {
  static allShows = [];

    static getShows = async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }

    static getItemCount = () => Shows.allShows.length;

    static getCommentCount = () => {
      let count = 0;
      Shows.allShows.forEach((show) => {
        count += show.comments.length;
      });
      return count;
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
      Shows.allShows = mappedMovies;
      Shows.renderMovies(mappedMovies);
    }

    static displayShows() {
      Shows.getShows().then((data) => {
        this.allShows = data;
        count.textContent = `(${data.length})`;
        Interactions.getLikes().then((likes) => {
          if (likes.length) {
            Shows.newMovies(likes, data);
          } else { Shows.newMovies(data, data); }
        });
      });
    }
}