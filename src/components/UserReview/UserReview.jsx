import style from './UserReview.module.scss';
import { CiUser } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';

export const UserReview = ({ text }) => {
  const { t } = useTranslation();
  return (
    <li className={style.review}>
      <CiUser size={50} className={style.icon} />
      <div className={style.text}>
        <div className={style.name}>{t('comments.user')} </div>
        <div className={style.descr}>{text}</div>
      </div>
    </li>
  );
};
