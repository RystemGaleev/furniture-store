import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
import { addToFavourites } from '../../redux/FavouritesSlice';
import { useNavigate } from 'react-router-dom';

import { currentProduct } from '../../redux/SingleProductSlice';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';

import { TfiShoppingCart, TfiHeart } from 'react-icons/tfi';
import { IoEnterOutline } from 'react-icons/io5';
import { IconUi } from '../ui/IconUi';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import style from './ProductCard.module.scss';
import { forwardRef } from 'react';

export const ProductCard = forwardRef(
  ({ img, id, price, old, title, collection }, ref) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products } = useSelector((state) => state.products);

    const redirectToProduct = () => {
      dispatch(currentProduct(products));
      navigate(`/product/${id}`);
    };

    const item = {
      id,
      price,
      img,
      title,
      old,
    };

    const AddedInCart = () => {
      toast.info(t('notification.cart'), {
        autoClose: 2000,
        icon: <TfiShoppingCart size={30} color={'var(--blue-color)'} />,
      });
      dispatch(addToCart(item));
    };

    const AddedInFavourite = () => {
      toast.info(t('notification.favourites'), {
        autoClose: 2000,
        icon: <TfiHeart size={30} color={'var(--blue-color)'} />,
      });
      dispatch(addToFavourites(item));
    };

    return (
      <motion.div ref={ref} className={style.card}>
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
        <div className={style.content}>
          <div className={style.img}>
            <div className={style.banners}>
              {old ? <div className={style.sale}> {t('productCard.sale')}</div> : null}
              {collection ? (
                <div className={style.new}>{t('productCard.new')}</div>
              ) : null}
            </div>

            <img src={img} alt={`product${id}`} />
          </div>
          <div className={style.tools}>
            <button onClick={redirectToProduct} className={style.check}>
              {t('productCard.view')}
              <IoEnterOutline className={style.icon} size={30} />
            </button>
            <button onClick={AddedInCart} className={style.circle}>
              <IconUi name="cart" cl={style.icon} />
            </button>
            <button onClick={AddedInFavourite} className={style.circle}>
              <IconUi name="favorite" cl={style.icon} />
            </button>
          </div>
        </div>
        <div className={style.blockText}>
          <div className={style.title}>{title}</div>
          <div className={style.block}>
            {t('productCard.price')}
            <div className={style.old}>{old ? `$${old}` : null}</div>
            <div className={style.price}>${price}</div>
          </div>
        </div>
      </motion.div>
    );
  },
);

export const MotionProductCard = motion(ProductCard);
