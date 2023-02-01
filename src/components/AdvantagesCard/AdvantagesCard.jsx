import style from './AdvantagesCard.module.scss';

export const AdvantagesCard = ({ title, icon }) => {
  return (
    <div className={style.card}>
      <div className={style.title}>{title}</div>
      <div className={style.icon}>{icon}</div>
    </div>
  );
};
