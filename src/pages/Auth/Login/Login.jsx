import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { catchAuthError } from '../../../utils';

import { InputControl } from '../../../components/InputControl/InputControl';
import { Layout } from '../../../Layout/Layout';

import { useTranslation } from 'react-i18next';
import style from './Login.module.scss';

export const Login = () => {
  const { t } = useTranslation();
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
    } catch (error) {
      catchAuthError(error, setError, t);
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
                {error.length > 0 ? <div className={style.error}>{error}</div> : null}
                <button className={style.btn}>{t('auth.log')}</button>

                <div className={style.descr}>
                  {t('auth.descr')}
                  <Link to="/signup"> {t('auth.registration')} </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
