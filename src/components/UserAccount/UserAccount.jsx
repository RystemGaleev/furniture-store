import { useTranslation } from 'react-i18next';
import style from './UserAccount.module.scss';

export const UserAccount = ({ handleLogout, user }) => {
  const { t } = useTranslation();

  return (
    <>
      {user ? (
        <div className={style.user}>
          <button onClick={handleLogout} className={style.logout}>
            <div className={style.name}>{user && user.displayName}</div>
            {t('header.logout')}
          </button>
        </div>
      ) : null}
    </>
  );
};
