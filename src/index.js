/* eslint import/extensions: 0 */

import './styles.css';
import SHOWS from './module/home.js';
import Interactions from './module/api.js';
import COMMENTS from './module/comments.js';

window.addEventListener('DOMContentLoaded', () => {
  Interactions.createAppId();
  SHOWS.displayShows();
  Interactions.getLikes();
  COMMENTS.getComments();
});

window.addEventListener('click', (e) => {
  e.preventDefault();
  Interactions.createNewLike(e);
  Interactions.removePopUp(e);
  COMMENTS.displayPopUp(e);
});