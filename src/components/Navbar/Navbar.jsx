import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';
import { getTotal } from '../../utils';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IconUi } from '../ui/IconUi';

export const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const { favourites } = useSelector((state) => state.favourites);
  return (
    <nav className={style.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? style.linkActive : style.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/favourites"
        className={({ isActive }) => (isActive ? style.linkActive : style.link)}
      >
        Favourites
        {favourites.length >= 1 ? (
          <div className={style.favouriteQuantity}>{favourites.length}</div>
        ) : null}
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) => (isActive ? style.linkActive : style.link)}
      >
        Orders
      </NavLink>
      <Link to="/cart" className={style.cart}>
        <IconUi name="cart" cl={style.icon} />

        <div className={style.quantity}>{getTotal(cart).totalQuantity}</div>
      </Link>
    </nav>
  );
};
