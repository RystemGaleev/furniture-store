import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputControl } from '../../../components/InputControl/InputControl';
import style from './Login.module.scss';
import { AuthContext } from '../../../context/AuthContext';
import { catchAuthError } from '../../../utils';
import { ModalContext } from '../../../context/ModalContext';

export const Login = () => {
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
    <div className={style.login}>
      <div className="container">
        <div className={style.wrapper}>
          <form onSubmit={handleSubmit} className={style.loginForm}>
            <div className={style.content}>
              <div className={style.title}>Login</div>
              <div className={style.inputs}>
                <InputControl
                  label="Email"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <InputControl
                  label="Password"
                  placeholder="Enter Password"
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, password: e.target.value }))
                  }
                />
              </div>
              <div className={style.error}>{error}</div>
              <button className={style.btn}>Login</button>

              <div className={style.descr}>
                Don't have an account yet?
                <Link to="/signup">Sign Up</Link>
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
  );
};
