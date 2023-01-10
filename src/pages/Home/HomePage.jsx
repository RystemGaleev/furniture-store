import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/ProductSlice';

import { Layout } from '../../assets/Layout/Layout';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { UiButton } from '../../components/ui/UiButton';

import './Home.scss';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);
  return (
    <Layout>
      <section className="home">
        <div className="container">
          <div className="home__wrapper">
            <div className="home__block">
              <div className="subtitle">INTERIOR</div>
              <h1 className="home__title">Home Design</h1>
              <i>Great design begins with an even greater story</i>
              <UiButton variant={'classic'}>Shop now</UiButton>
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <div className="container">
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
