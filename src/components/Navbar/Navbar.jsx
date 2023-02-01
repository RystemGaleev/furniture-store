import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';
import { getTotal } from '../../utils';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IconUi } from '../ui/IconUi';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation();

  const { cart } = useSelector((state) => state.cart);
  const { favourites } = useSelector((state) => state.favourites);
  const { orders } = useSelector((state) => state.orders);

  return (
    <nav className={style.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? style.linkActive : style.link)}
      >
        {t('navbar.home')}
      </NavLink>
      <NavLink
        to="/favourites"
        className={({ isActive }) => (isActive ? style.linkActive : style.link)}
      >
        {t('navbar.favourites')}
        {favourites.length >= 1 ? (
          <div className={style.favouriteQuantity}>{favourites.length}</div>
        ) : null}
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) => (isActive ? style.linkActive : style.link)}
      >
        {t('navbar.orders')}
        {orders.length >= 1 ? (
          <div className={style.ordersQuantity}>{orders.length}</div>
        ) : null}
      </NavLink>
      <Link to="/cart" className={style.cart}>
        <IconUi name="cart" cl={style.icon} />

        <div className={style.quantity}>{getTotal(cart).totalQuantity}</div>
      </Link>
    </nav>
  );
};
