import style from './Burger.module.scss';

export const Burger = ({ openMenu, burger }) => {
  return (
    <div onClick={openMenu} className={style.burger}>
      <span className={burger ? `${style.line_active}` : `${style.line}`}></span>
      <span className={burger ? `${style.line_active}` : `${style.line}`}></span>
      <span className={burger ? `${style.line_active}` : `${style.line}`}></span>
    </div>
  );
};
