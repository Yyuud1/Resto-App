import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoTemplate } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="explore-restaurant" id="explore-restaurant">
      <h2 style="text-align: center; margin-top: 6%; color: var(--black);">Favorite Resto</h2>
      <div class="container resto-list" id="resto-list">
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllResto();
    const restaurantContainer = document.querySelector('.resto-list');

    if (!restaurant.length) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('no-favorites');
      newDiv.style.textAlign = 'center';
      newDiv.innerText = 'Favorite restaurant not yet available';
      document.getElementById('explore-restaurant').appendChild(newDiv);
      return;
    }
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoTemplate(resto);
    });
  },
};

export default Favorite;
