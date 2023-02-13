import { getTotal } from '../../utils';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageToggler } from '../LanguageToggler/LanguageToggler';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import style from './NavbarMobile.module.scss';
import { UserAccount } from '../UserAccount/UserAccount';

export const NavbarMobile = ({ user, handleLogout }) => {
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
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? style.linkActive : style.link)}
      >
        {t('navbar.cart')}
        <div className={style.cartQuantity}>{getTotal(cart).totalQuantity}</div>
      </NavLink>
      <div className={style.tools}>
        <ThemeToggler />
        <LanguageToggler />
      </div>
      <UserAccount handleLogout={handleLogout} user={user} />
    </nav>
  );
};
