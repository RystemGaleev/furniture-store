import style from './Footer.module.scss';
import { BsTelegram } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      {/* <div className="container">
        <div className={style.wrapper}>
          <div className={style.copyright}>
            Copyright 2023 - Designed & Developed by Rystezy
          </div>
          <div className={style.contacts}>
            <div className={style.block}>
              <BsTelegram className={style.icon} size={26} />
              <a
                rel="noreferrer"
                target="_blank"
                className={style.link}
                href="https://t.me/Rystezy"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};
