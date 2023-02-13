import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../../redux/CartSlice';

import { Layout } from '../../Layout/Layout';
import { SliderForCard } from '../SliderForCard/SliderForCard';
import style from './SingleProduct.module.scss';
import { Link } from 'react-router-dom';
import { IconUi } from '../ui/IconUi';
import { ProductComments } from '../ProductComments/ProductComments';
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import { TfiShoppingCart } from 'react-icons/tfi';

export const SingleProduct = () => {
  const { t } = useTranslation();

  const [singleProduct, setSingleProduct] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const { reviews } = useSelector((state) => state.reviews);
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
  console.log(singleProduct);
  const currentReview = reviews.filter((rev) => rev.id === id);

  const AddedInCart = () => {
    toast.info(t('notification.cart'), {
      autoClose: 2000,
      icon: <TfiShoppingCart size={30} color={'var(--blue-color)'} />,
    });
    dispatch(addToCart(singleProduct));
  };
  return (
    <Layout>
      <div className="container">
        <ToastContainer
          closeOnClick={false}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          position={'top-right'}
          draggable={false}
          limit={7}
          closeButton={false}
          toastStyle={{ width: '260px' }}
        />
        <div className={style.wrapper}>
          <div className={style.product}>
            <div className={style.img}>
              <SliderForCard singleProduct={singleProduct} />
            </div>
            <div className={style.block}>
              <div className={style.title}>{singleProduct.title}</div>
              <div className={style.descr}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis
                cupiditate quod ad perspiciatis debitis unde totam aliquam hic
                perferendis.
              </div>

              <div className={style.rating}>
                {t('singleProduct.rating')} <span>{singleProduct.rating}/5</span>
              </div>
              <div className={style.price}>
                <div className={style.new}>
                  {t('singleProduct.price')} <span>${singleProduct.price}</span>
                </div>
                {singleProduct.old ? (
                  <div className={style.old}>$ {singleProduct.old}</div>
                ) : null}
              </div>

              <button onClick={AddedInCart} className={style.add}>
                {t('singleProduct.addBtn')}
                <IconUi name="cart" cl={style.icon} />
              </button>
              <Link className={style.back} onClick={() => navigate(-1)}>
                {t('singleProduct.backBtn')}
              </Link>
            </div>
          </div>
          <ProductComments reviews={currentReview} id={id} />
        </div>
      </div>
    </Layout>
  );
};
