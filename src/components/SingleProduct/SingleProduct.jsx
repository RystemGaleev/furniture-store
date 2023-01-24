import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../../redux/CartSlice';

import { Layout } from '../../Layout/Layout';
import { SliderForCard } from '../SliderForCard/SliderForCard';
import style from './SingleProduct.module.scss';
import { Link } from 'react-router-dom';
import { IconUi } from '../ui/IconUi';

export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetch(`http://localhost:3001/furniture/${id}`).then((res) =>
        res.json(),
      );
      setSingleProduct(data);
    };
    fetchProduct();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className={style.product}>
          <div className={style.img}>
            <SliderForCard singleProduct={singleProduct} />
          </div>
          <div className={style.block}>
            <div className={style.title}>{singleProduct.title}</div>
            <div className={style.descr}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis
              cupiditate quod ad perspiciatis debitis unde totam aliquam hic perferendis.
            </div>

            <div className={style.rating}>
              Rating <span>{singleProduct.rating}/5</span>
            </div>
            <div className={style.price}>
              <div className={style.new}>
                Price: <span>${singleProduct.price}</span>
              </div>
              {singleProduct.old ? (
                <div className={style.old}>$ {singleProduct.old}</div>
              ) : null}
            </div>

            <button
              onClick={() => dispatch(addToCart(singleProduct))}
              className={style.add}
            >
              Add to cart
              <IconUi name="cart" cl={style.icon} />
            </button>
            <Link className={style.back} onClick={() => navigate(-1)}>
              Вернуться назад
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
