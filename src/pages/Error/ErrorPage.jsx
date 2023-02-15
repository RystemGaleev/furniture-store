import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AnimationPage, PageTranstition } from '../../Animations/Animation';
import { Layout } from '../../Layout/Layout';
import './Error.scss';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Layout>
      <motion.section
        className="Error"
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
      >
        <div className="notfound">
          <div className="container">
            <div className="notfound__wrapper">
              <div className="notfound__error">404</div>
              <div className="notfound__title">{t('notfound.title')}</div>
              <button onClick={() => navigate('/')} className="notfound__btn">
                {t('notfound.btn')}
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};
