import { useSelector } from 'react-redux';

import { Layout } from '../../Layout/Layout';
import { MotionFavouritesCard } from '../../components/FavouritesCard/FavouritesCard';

import {
  AnimationContainer,
  AnimationLeftX,
  AnimationPage,
  PageTranstition,
} from '../../Animations/Animation';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Favourites.scss';

export const FavouritesPage = () => {
  const { t } = useTranslation();
  const { favourites } = useSelector((state) => state.favourites);
  return (
    <Layout>
      <motion.section
        className="favourites"
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
      >
        <div className="container">
          <motion.h2
            className="title__h2"
            variants={AnimationLeftX}
            initial="hidden"
            whileInView={'show'}
            transition={{ duration: 0.5 }}
          >
            {t('favourites.title')}
          </motion.h2>
          <motion.div
            className="favourites__wrapper"
            variants={AnimationContainer}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
          >
            {favourites.map((item, index) => (
              <MotionFavouritesCard
                variants={AnimationLeftX}
                custom={index}
                key={item.id}
                {...item}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};
