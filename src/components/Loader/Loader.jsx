import style from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
