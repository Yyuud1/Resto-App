import Swal from 'sweetalert2';
// import FavoriteRestoIdb from '../data/favorite-resto-idb';
import { createFavoriteRestoButtonTemplate, createUnfavoriteRestoButtonTemplate } from '../views/template/template-creator';

const FavoriteButtonPresenter = {
  async init({ favoriteButtonContainer, favoriteRestos, resto }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._resto = resto;
    this._favoriteRestos = favoriteRestos;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestoExist(id) {
    const resto = await this._favoriteRestos.getResto(id);
    return !!resto;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteRestoButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestos.putResto(this._resto);
      this._renderButton();
      this.showAlertSave();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createUnfavoriteRestoButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestos.deleteResto(this._resto.id);
      this._renderButton();
    });
  },

  showAlertSave() {
    Swal.fire({
      icon: 'success',
      color: '#557571',
      title: 'successfully saved to favorites',
      showConfirmButton: false,
      timer: 1500,
    });
  },
};

export default FavoriteButtonPresenter;
