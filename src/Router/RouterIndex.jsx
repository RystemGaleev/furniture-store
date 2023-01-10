import { HomePage } from '../pages/Home/HomePage';
import { CartPage } from '../pages/Cart/CartPage';

export const privateRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/cart', element: <CartPage /> },
];
