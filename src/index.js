/* eslint import/extensions: 0 */

import './styles.css';
import SHOWS from './module/home.js';
import INTERACTIONS from './module/api.js';
// import COMMENTS from './comments.js';

// library.add(faHeart);
// dom.watch();

window.addEventListener('DOMContentLoaded', () => {
  INTERACTIONS.createAppId();
  SHOWS.displayShows();
//   INTERACTIONS.getLikes();
//   COMMENTS.getComments();
});

// window.addEventListener('click', (e) => {
//   e.preventDefault();
//   INTERACTIONS.createNewLike(e);
//   INTERACTIONS.removePopUp(e);

//   COMMENTS.displayPopUp(e);
// });