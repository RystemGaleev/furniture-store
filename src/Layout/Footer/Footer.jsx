import style from './Footer.module.scss';
import { BsTelegram } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.copyright}>Designed & Developed by Rystezy</div>
          <div className={style.contacts}>
            <a
              rel="noreferrer"
              target="_blank"
              className={style.link}
              href="https://t.me/Rystezy"
            >
              <BsTelegram className={style.icon} size={26} />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
