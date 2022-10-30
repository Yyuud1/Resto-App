import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import TheRestoSource from '../../data/theresto-source';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import { createDetailRestoTemplate } from '../template/template-creator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const DetailPage = {
  async render() {
    return `
        <div id="resto" class="resto"></div>
        <div id="favoriteButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createDetailRestoTemplate(resto);

    FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: url.id,
        name: resto.name,
        pictureId: resto.pictureId,
        city: resto.city,
        rating: resto.rating,
      },
    });

    const formReview = document.querySelector('#formReview');
    formReview.addEventListener('submit', async (e) => {
      e.preventDefault();
      const usernameInput = document.querySelector('#usernameInput').value;
      const reviewInput = document.querySelector('#reviewInput').value;
      const review = {
        id: url.id,
        name: usernameInput,
        review: reviewInput,
      };
      console.log(review);
      const reviewResult = await TheRestoSource.sendReview(review);
      console.log(reviewResult);
      Swal.fire({
        icon: 'success',
        color: '#557571',
        title: 'Your review has been successfully added',
        showConfirmButton: false,
        timer: 1500,
      });
    });
  },
};

export default DetailPage;
