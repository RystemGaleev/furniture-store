import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/ProductSlice';
import { HashLink } from 'react-router-hash-link';
import { AuthContext } from '../../context/AuthContext';
import { ModalContext } from '../../context/ModalContext';

import { Layout } from '../../Layout/Layout';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import CustomModal from '../../components/CustomModal/CustomModal';
import { Search } from '../../components/Search/Search';
import { Slider } from '../../components/Slider/Slider';
import { AdvantagesCard } from '../../components/AdvantagesCard/AdvantagesCard';

import { motion } from 'framer-motion';
import { textAnimation } from '../../Animations/Animation';
import { Trans, useTranslation } from 'react-i18next';
import {
  TfiPaintRoller,
  TfiThumbUp,
  TfiMedallAlt,
  TfiBlackboard,
  TfiBrushAlt,
  TfiShine,
} from 'react-icons/tfi';
import './Home.scss';

export const HomePage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { user } = useContext(AuthContext);
  const { modalOpen, setModalOpen } = useContext(ModalContext);

  const { products } = useSelector((state) => state.products);
  const [searchValue, setSearchValue] = useState('');

  const filterProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const advantages = [
    {
      title: t('promo.advantages1'),
      icon: <TfiPaintRoller color={'var(--blue-color)'} size={30} />,
      id: 1,
    },
    {
      title: t('promo.advantages2'),
      icon: <TfiMedallAlt color={'var(--blue-color)'} size={30} />,
      id: 2,
    },
    {
      title: t('promo.advantages3'),
      icon: <TfiThumbUp color={'var(--blue-color)'} size={30} />,
      id: 3,
    },
    {
      title: t('promo.advantages4'),
      icon: <TfiBlackboard color={'var(--blue-color)'} size={30} />,
      id: 4,
    },
    {
      title: t('promo.advantages5'),
      icon: <TfiBrushAlt color={'var(--blue-color)'} size={30} />,
      id: 5,
    },
    {
      title: t('promo.advantages6'),
      icon: <TfiShine color={'var(--blue-color)'} size={30} />,
      id: 6,
    },
  ];

  return (
    <Layout>
      <motion.section
        className="home"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <div className="container">
          <div className="home__wrapper">
            <CustomModal
              isOpen={modalOpen.welcomeModal}
              handleClose={() => setModalOpen({ ...modalOpen, welcomeModal: false })}
              color={'transparent'}
              style={{
                minWidth: '340px',
                left: '50%',
                top: '50%',
                height: '70px',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'var(--blue-color)',
              }}
            >
              <div className="popup__title">
                {t('home.welcome')} {user.displayName}
              </div>
            </CustomModal>

            <div className="home__block">
              <div className="subtitle">INTERIOR</div>
              <Trans>
                <h1 className="home__title">{t('home.title')}</h1>
              </Trans>
              <i>{t('home.descr')}</i>
              <HashLink smooth to="/#products" className="classic">
                {t('home.btn')}
              </HashLink>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="promo">
        <div className="container">
          <motion.h2
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3, delay: 0.2 }}
            className="title__h2"
          >
            {t('promo.title')}
          </motion.h2>
          <div className="promo__wrapper">
            <Slider />
            <div className="promo__advantages">
              {advantages.map((item) => (
                <AdvantagesCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="products">
        <div className="container">
          <div className="products__block">
            <motion.h2
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3, delay: 0.2 }}
              className="title__h2"
            >
              {t('products.title')}
            </motion.h2>
            <Search setSearchValue={setSearchValue} searchValue={searchValue} />
          </div>
          <div className="products__wrapper">
            {filterProducts.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
