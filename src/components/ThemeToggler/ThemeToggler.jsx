import { CiDark, CiLight } from 'react-icons/ci';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import style from './ThemeToggler.module.scss';

export const ThemeToggler = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={style.theme}>
      {theme === 'light' ? (
        <div className={style.text}>
          <CiDark size={32} /> <p>{t('header.theme1')}</p>
        </div>
      ) : (
        <div className={style.text}>
          <CiLight size={32} /> <p>{t('header.theme2')}</p>
        </div>
      )}
    </button>
  );
};
