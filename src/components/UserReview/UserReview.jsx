import style from './UserReview.module.scss';
import { CiUser } from 'react-icons/ci';

export const UserReview = ({ text }) => {
  return (
    <li className={style.review}>
      <CiUser size={50} className={style.icon} />
      <div className={style.text}>
        <div className={style.name}>User </div>
        <div className={style.descr}>{text}</div>
      </div>
    </li>
  );
};
