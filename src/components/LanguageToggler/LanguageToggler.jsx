import { useTranslation } from 'react-i18next';
import style from './LanguageToggler.module.scss';

export const LanguageToggler = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className={style.languageBtns}>
      <button className={style.language} onClick={() => changeLanguage('en')}>
        EN
      </button>
      <button className={style.language} onClick={() => changeLanguage('ru')}>
        RU
      </button>
    </div>
  );
};
