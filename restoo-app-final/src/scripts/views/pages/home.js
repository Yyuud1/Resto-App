import TheRestoSource from '../../data/theresto-source';
import { createRestoTemplate } from '../template/template-creator';

const HomePage = {
  async render() {
    return `
    <section class="home hero" id="home">
      <div class="text-home">
        <h1>find your food at a best restaurant</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores atque beatae cupiditate adipisci corrupti eius!</p><br>
        <a href="#">Join Us</a>
      </div>
      <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg">
        <source type="image/webp" srcset="./images/heros/hero-image_4.jpg">
        <source type="image/jpeg" srcset="./images/heros/hero-image_4.jpg">
        <img src="./images/heros/hero-image_4-large.jpg" alt="hero background">
      </picture>
    </section>
    <section class="explore-restaurant">
        <h2 style="text-align: center; color: #333;">Explore Restaurant</h2>
        <div class="container resto-list">
        </div>
    </section>
      `;
  },

  async afterRender() {
    const dataResto = await TheRestoSource.homeResto();
    const restoContainer = document.querySelector('.resto-list');
    dataResto.forEach((resto) => {
      restoContainer.innerHTML += createRestoTemplate(resto);
    });
  },
};

export default HomePage;
