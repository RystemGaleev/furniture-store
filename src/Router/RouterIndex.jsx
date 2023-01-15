import { HomePage } from '../pages/Home/HomePage';
import { CartPage } from '../pages/Cart/CartPage';
import { SingleProduct } from '../components/SingleProduct/SingleProduct';
import { ErrorPage } from '../pages/Error/ErrorPage';

export const privateRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/product/:id', element: <SingleProduct /> },
  { path: '*', element: <ErrorPage /> },
];
