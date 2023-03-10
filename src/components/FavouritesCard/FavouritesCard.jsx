import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeInFavourites } from '../../redux/FavouritesSlice';
import { currentProduct } from '../../redux/SingleProductSlice';
import { ToastContainer, toast } from 'react-toastify';

import { IoEnterOutline } from 'react-icons/io5';
import { IconUi } from '../ui/IconUi';
import { motion } from 'framer-motion';

import { TfiHeart } from 'react-icons/tfi';
import { useTranslation } from 'react-i18next';
import style from './FavouritesCard.module.scss';
import { forwardRef } from 'react';

export const FavouritesCard = forwardRef(({ price, title, id, img, old }, ref) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);

  const redirectToProduct = () => {
    dispatch(currentProduct(products));
    navigate(`/product/${id}`);
  };

  const removeFavourites = () => {
    toast.error('Product removed from favorites', {
      autoClose: 2000,
      icon: <TfiHeart size={30} color={'#e74c3c'} />,
    });
    dispatch(removeInFavourites(id));
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
        autoClose={false}
      />
      <div className={style.content}>
        <div className={style.img}>
          <img src={img} alt={`product${id}`} />
        </div>
        <div className={style.tools}>
          <button onClick={redirectToProduct} className={style.check}>
            {t('productCard.view')}
            <IoEnterOutline className={style.icon} size={30} />
          </button>

          <button onClick={removeFavourites} className={style.circle}>
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
});

export const MotionFavouritesCard = motion(FavouritesCard);
