import { HomePage } from '../pages/Home/HomePage';
import { CartPage } from '../pages/Cart/CartPage';
import { SingleProduct } from '../components/SingleProduct/SingleProduct';
import { ErrorPage } from '../pages/Error/ErrorPage';
import { Login } from '../pages/Auth/Login/Login';
import { SignUp } from '../pages/Auth/SignUp/SignUp';
import { FavouritesPage } from '../pages/Favourites/FavouritesPage';
import { OrdersPage } from '../pages/Orders/OrdersPage';

export const publicRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
];
export const privateRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/favourites', element: <FavouritesPage /> },
  { path: '/orders', element: <OrdersPage /> },

  { path: '/product/:id', element: <SingleProduct /> },
  { path: '*', element: <ErrorPage /> },
];
