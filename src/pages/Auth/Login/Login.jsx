import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { catchAuthError } from '../../../utils';
import { ModalContext } from '../../../context/ModalContext';

import { InputControl } from '../../../components/InputControl/InputControl';
import { Layout } from '../../../Layout/Layout';

import { useTranslation } from 'react-i18next';
import style from './Login.module.scss';

export const Login = () => {
  const { t } = useTranslation();
  const { modalOpen, setModalOpen } = useContext(ModalContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { signIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      setError('Fill all fields');
      return;
    }

    setError('');
    try {
      await signIn(values.email, values.password);
      navigate('/');
      const startTimer = () => {
        const timer = setTimeout(() => {
          setModalOpen({ ...modalOpen, welcomModal: false });
        }, 3000);
        return () => clearTimeout(timer);
      };
      startTimer();
      setModalOpen({ ...modalOpen, welcomModal: true });
    } catch (error) {
      catchAuthError(error, setError);
    }
  };

  return (
    <Layout>
      <div className={style.login}>
        <div className="container">
          <div className={style.wrapper}>
            <form onSubmit={handleSubmit} className={style.loginForm}>
              <div className={style.content}>
                <div className={style.title}> {t('auth.login')} </div>
                <div className={style.inputs}>
                  <InputControl
                    label={t('auth.emailText')}
                    type="text"
                    placeholder={t('auth.email')}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                  <InputControl
                    label={t('auth.passText')}
                    type="password"
                    placeholder={t('auth.pass')}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, password: e.target.value }))
                    }
                  />
                </div>
                <div className={style.error}>{error}</div>
                <button className={style.btn}>{t('auth.log')}</button>

                <div className={style.descr}>
                  {t('auth.descr')}
                  <Link to="/signup"> {t('auth.registration')} </Link>
                </div>
              </div>
            </form>
            <div className={style.textBlock}>
              <div className={style.text}>{t('auth.title')}</div>
              <div className={style.textSm}>{t('auth.subtitle')} </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
