import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/ProductSlice';
import { HashLink } from 'react-router-hash-link';

import { Layout } from '../../Layout/Layout';
import { MotionProductCard } from '../../components/ProductCard/ProductCard';
import { Search } from '../../components/Search/Search';
import { Slider } from '../../components/Slider/Slider';
import { MotionAdvantagesCard } from '../../components/AdvantagesCard/AdvantagesCard';

import { motion } from 'framer-motion';
import {
  AnimationContainer,
  AnimationPage,
  AnimationCardLeft,
  AnimationCardRight,
  PageTranstition,
  AnimationLeftX,
} from '../../Animations/Animation';
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

  // const { user } = useContext(AuthContext);

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
      icon: <TfiPaintRoller color={'var(--blue-color)'} className="promo__icon" />,
      id: 1,
    },
    {
      title: t('promo.advantages2'),
      icon: <TfiMedallAlt color={'var(--blue-color)'} className="promo__icon" />,
      id: 2,
    },
    {
      title: t('promo.advantages3'),
      icon: <TfiThumbUp color={'var(--blue-color)'} className="promo__icon" />,
      id: 3,
    },
    {
      title: t('promo.advantages4'),
      icon: <TfiBlackboard color={'var(--blue-color)'} className="promo__icon" />,
      id: 4,
    },
    {
      title: t('promo.advantages5'),
      icon: <TfiBrushAlt color={'var(--blue-color)'} className="promo__icon" />,
      id: 5,
    },
    {
      title: t('promo.advantages6'),
      icon: <TfiShine color={'var(--blue-color)'} className="promo__icon" />,
      id: 6,
    },
  ];

  return (
    <Layout>
      <motion.section
        className="home"
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
      >
        <div className="container">
          <div className="home__wrapper">
            <div className="home__block">
              <div className="subtitle">INTERIOR</div>
              <Trans>
                <h1 className="home__title">{t('home.title')}</h1>
              </Trans>
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
            variants={AnimationLeftX}
            initial="hidden"
            whileInView={'show'}
            transition={{ duration: 0.5 }}
            className="title__h2"
          >
            {t('promo.title')}
          </motion.h2>
          <div className="promo__wrapper">
            <Slider />
            <motion.div
              className="promo__advantages"
              variants={AnimationContainer}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
            >
              {advantages.map((item, index) => (
                <MotionAdvantagesCard
                  variants={index % 2 === 0 ? AnimationCardLeft : AnimationCardRight}
                  custom={index}
                  key={item.id}
                  {...item}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="products" className="products">
        <div className="container">
          <div className="products__block">
            <motion.h2
              variants={AnimationLeftX}
              initial="hidden"
              whileInView={'show'}
              transition={{ duration: 0.5 }}
              className="title__h2"
            >
              {t('products.title')}
            </motion.h2>
            <Search setSearchValue={setSearchValue} searchValue={searchValue} />
          </div>
          <motion.div
            className="products__wrapper"
            variants={AnimationContainer}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
          >
            {filterProducts.map((item, index) => (
              <MotionProductCard
                variants={AnimationLeftX}
                custom={index}
                key={item.id}
                {...item}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
