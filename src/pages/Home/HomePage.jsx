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

import { motion } from 'framer-motion';
import { textAnimation } from '../../Animations/Animation';
import './Home.scss';

export const HomePage = () => {
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
              isOpen={modalOpen.welcomModal}
              handleClose={() => setModalOpen({ ...modalOpen, welcomModal: false })}
              color={'transparent'}
              style={{
                minWidth: '340px',
                left: '50%',
                top: '50%',
                height: '70px',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#3392ff',
              }}
            >
              <div className="popup__title">Welcome {user.displayName}</div>
            </CustomModal>

            <div className="home__block">
              <div className="subtitle">INTERIOR</div>
              <h1 className="home__title">Home Design</h1>

              <i>Great design begins with an even greater story</i>
              <HashLink smooth to="/#products" className="classic">
                Shop now
              </HashLink>
            </div>
          </div>
        </div>
      </motion.section>
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
              The most popular
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
