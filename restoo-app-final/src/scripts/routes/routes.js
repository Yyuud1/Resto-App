import HomePage from '../views/pages/home';
import FavoritePage from '../views/pages/favorite';
import DetailPage from '../views/pages/detail';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/favorite': FavoritePage,
  '/detail/:id': DetailPage,
};

export default routes;
