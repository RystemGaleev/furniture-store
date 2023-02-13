import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { catchAuthError } from '../../../utils';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

import { ModalContext } from '../../../context/ModalContext';
import { Layout } from '../../../Layout/Layout';
import { InputControl } from '../../../components/InputControl/InputControl';

import { useTranslation } from 'react-i18next';
import style from './SignUp.module.scss';

export const SignUp = () => {
  const { t } = useTranslation();

  const { modalOpen, setModalOpen } = useContext(ModalContext);

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { createUser } = useContext(AuthContext);
  const logged = () => {
    toast.info('Product added to cart', {
      autoClose: 2000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (values.password.length < 8) {
      setError('The password must contain more than 8 characters');
      return;
    }
    if (values.name.length < 4) {
      setError('The user name must contain at least 4 characters');
      return;
    }
    if (values.name.length > 14) {
      setError(
        'The name is too large the maximum number of characters should not exceed 14',
      );
      return;
    }
    try {
      await createUser(values.email, values.password).then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
      });
      navigate('/');
      logged();

      const startTimer = () => {
        const timer = setTimeout(() => {
          setModalOpen({ ...modalOpen, welcomeModal: false });
        }, 3000);
        return () => clearTimeout(timer);
      };
      startTimer();
      setModalOpen({ ...modalOpen, welcomeModal: true });
    } catch (error) {
      catchAuthError(error, setError);
    }
  };

  return (
    <Layout>
      <div className={style.signUp}>
        <div className="container">
          <div className={style.wrapper}>
            <ToastContainer
              closeOnClick={false}
              pauseOnFocusLoss={false}
              pauseOnHover={false}
              position={'top-right'}
              draggable={false}
              closeButton={false}
              toastStyle={{ width: '260px' }}
            />
            <form onSubmit={handleSubmit} className={style.formSignUp}>
              <div className={style.content}>
                <div className={style.title}>{t('auth.registration')}</div>
                <div className={style.inputs}>
                  <InputControl
                    label={t('auth.nameText')}
                    placeholder={t('auth.name')}
                    type="text"
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <InputControl
                    label={t('auth.emailText')}
                    placeholder={t('auth.email')}
                    type="text"
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                  <InputControl
                    label={t('auth.passText')}
                    placeholder={t('auth.pass')}
                    type="password"
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, password: e.target.value }))
                    }
                  />
                </div>
                <div className={style.error}>{error}</div>
                <button className={style.submit}>{t('auth.registr')}</button>

                <div className={style.descr}>
                  {t('auth.descr')} <Link to="/login">{t('auth.login')}</Link>
                </div>
              </div>
            </form>
            <div className={style.textBlock}>
              <div className={style.text}>{t('auth.title')} </div>
              <div className={style.textSm}>{t('auth.subtitle')} </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
