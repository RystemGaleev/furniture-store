import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { catchAuthError } from '../../../utils';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

import { ModalContext } from '../../../context/ModalContext';
import { Layout } from '../../../Layout/Layout';
import { InputControl } from '../../../components/InputControl/InputControl';

import style from './SignUp.module.scss';

export const SignUp = () => {
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
                <div className={style.title}>Sign Up</div>
                <div className={style.inputs}>
                  <InputControl
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <InputControl
                    label="Email"
                    placeholder="Enter your email"
                    type="text"
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                  <InputControl
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, password: e.target.value }))
                    }
                  />
                </div>
                <div className={style.error}>{error}</div>
                <button className={style.submit}>Sign Up</button>

                <div className={style.descr}>
                  Already have an account? <Link to="/login">Login</Link>
                </div>
              </div>
            </form>
            <div className={style.textBlock}>
              <div className={style.text}>Welcome to our online store Interior </div>
              <div className={style.textSm}>Please log in to go to the main page. </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
