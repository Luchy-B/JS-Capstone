/* eslint import/extensions: 0 */

import './styles.css';
import Shows from './module/home.js';
import Interactions from './module/api.js';
import Comments from './module/comments.js';

window.addEventListener('DOMContentLoaded', () => {
  Interactions.createAppId();
  Shows.displayShows();
  Interactions.getLikes();
  Comments.getComments();
});

window.addEventListener('click', (e) => {
  e.preventDefault();
  Interactions.createNewLike(e);
  Interactions.removePopUp(e);
  Comments.displayPopUp(e);
});