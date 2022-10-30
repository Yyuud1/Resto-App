import CONFIG from '../../globals/config';

const createRestoTemplate = (resto) => `
    <div class="card">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SM + resto.pictureId}" alt="${resto.name}">
        <h2 class="resto__title" style="color: var(--green);">${resto.name}</h2>
        <div class = "info-resto">
            
            <p style="color: var(--black);"><i class="fas fa-star" style="color: #FFE54C;"></i> ${resto.rating}</p>
            <p><i class="fas fa-map-marker-alt" style="color: salmon;"></i> ${resto.city}</p>
        </div>

        <a href="/#/detail/${resto.id}" id="${resto.id}" class="detail-btn" style="background-color: var(--green); border-radius: 10px;">Details Resto</a>
    </div>

`;

const createDetailRestoTemplate = (resto) => `
    <h1 style="color: var(--green);" class="resto-name">${resto.name}</h1>

    <div class="resto-info">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_LG + resto.pictureId}" alt="${resto.name}">
        
        <div class="informations">
            <h2>Information</h2>
            <div class="information-item">
              <h4>Resto Name</h4>
              <p>${resto.name}</p>
              <h4>Address</h4>
              <p>${resto.address}</p>
              <h4>Rating</h4>
              <p><i class="fas fa-star" style="color: #FFE54C;"></i> ${resto.rating}</p>
              <h4>City</h4>
              <p><i class="fas fa-map-marker-alt" style="color: salmon;"></i>  ${resto.city}</p>
            </div>
        </div> 
    </div>

    <div class="resto-overview">
        <h2><i class="fas fa-book"></i> Overview</h2>
        <p>${resto.description}</p>

        <h2><i class="fas fa-hamburger"></i> Foods</h2>
        <p>Foods : ${resto.menus.foods.map((food) => `${food.name}`).join(', ')}</p>

        <h2><i class="fas fa-mug-hot"></i> Drinks</h2>
        <p>Drinks : ${resto.menus.foods.map((drink) => `${drink.name}`).join(', ')}</p><br>

        <div class="review">
          <h2><i class="fas fa-comments"></i> Review</h2>
          <div class="review-card">${resto.customerReviews.map((review) => `
            <div class="review-item">
              <h4><i class="fas fa-user"></i> ${review.name}</h4>
              <p>${review.review}</p>
            </div>
          `).join('')}</div>
        </div>
    </div>

    <div class="add-review-form">
      <h2><i class="fas fa-edit"></i> Post a New Review</h2>
      <form id="formReview">
        <div class="form-group">
          <label for="usernameInput"></label>
          <input type="text" placeholder="username" id="usernameInput" required>
        </div>
        <div class="form-group">
          <label for="reviewInput"></label>
          <input type="text" placeholder="review" id="reviewInput" required>
        </div>
        <button id="submit-review" type="submit">Post Review</button>
      </form>
    </div>
`;

const createFavoriteRestoButtonTemplate = () => `
  <button aria-label="add to favorite resto" id="favoriteButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnfavoriteRestoButtonTemplate = () => `
  <button aria-label="remove from favorite resto" id="favoriteButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoTemplate,
  createDetailRestoTemplate,
  createFavoriteRestoButtonTemplate,
  createUnfavoriteRestoButtonTemplate,
};
