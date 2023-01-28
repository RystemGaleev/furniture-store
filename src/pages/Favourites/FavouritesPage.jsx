import { useSelector } from 'react-redux';

import { Layout } from '../../Layout/Layout';
import { FavouritesCard } from '../../components/FavouritesCard/FavouritesCard';

import { textAnimation } from '../../Animations/Animation';
import { motion } from 'framer-motion';
import './Favourites.scss';

export const FavouritesPage = () => {
  const { favourites } = useSelector((state) => state.favourites);
  return (
    <Layout>
      <motion.section
        className="favourites"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <div className="container">
          <motion.h2
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            className="title__h2"
          >
            Favourites page
          </motion.h2>
          <div className="favourites__wrapper">
            {favourites.map((item) => (
              <FavouritesCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};
