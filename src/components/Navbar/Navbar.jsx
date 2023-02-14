import { Link, useNavigate } from 'react-router-dom';
import { getTotal } from '../../utils';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IconUi } from '../ui/IconUi';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.scss';

import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

import { ThemeToggler } from '../../components/ThemeToggler/ThemeToggler';

import { LanguageToggler } from '../../components/LanguageToggler/LanguageToggler';

import { UserAccount } from '../../components/UserAccount/UserAccount';

export const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.cart);
  const { favourites } = useSelector((state) => state.favourites);
  const { orders } = useSelector((state) => state.orders);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/signup');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className={style.nav}>
      <div className={style.nav_left}>
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
      </div>
      <div className={style.nav_right}>
        <LanguageToggler />
        <ThemeToggler />
        <UserAccount handleLogout={handleLogout} user={user} />
      </div>
    </nav>
  );
};
