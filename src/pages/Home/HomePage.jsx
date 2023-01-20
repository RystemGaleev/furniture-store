import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/ProductSlice';
import { HashLink } from 'react-router-hash-link';
import { AuthContext } from '../../context/AuthContext';
import { ModalContext } from '../../context/ModalContext';

import { Layout } from '../../Layout/Layout';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import CustomModal from '../../components/CustomModal/CustomModal';

import './Home.scss';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const { user } = useContext(AuthContext);
  const { modalOpen, setModalOpen } = useContext(ModalContext);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Layout>
      <section className="home">
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
                backgroundColor: 'black',
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
      </section>
      <section id="products" className="products">
        <div className="container">
          <h2 className="title__h2">The most popular</h2>
          <div className="products__wrapper">
            {products.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
