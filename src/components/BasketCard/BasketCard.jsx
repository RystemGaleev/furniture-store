import style from './BasketCard.module.scss';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeInCart, decrementProduct, incrementProduct } from '../../redux/CartSlice';

import { TfiShoppingCart } from 'react-icons/tfi';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { frameAnimationX } from '../../Animations/Animation';
import { useTranslation } from 'react-i18next';

export const BasketCard = ({ id, price, img, title, quantity }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const removeItem = () => {
    toast.error(t('notification.removeCart'), {
      autoClose: 2000,
      icon: <TfiShoppingCart size={30} color={'#e74c3c'} />,
    });
    dispatch(removeInCart(id));
  };

  return (
    <motion.div
      className={style.item}
      variants={frameAnimationX}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <div className={style.img}>
        <img src={img} alt={`product${id}`} />
      </div>
      <ToastContainer
        closeOnClick={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        position={'top-right'}
        draggable={false}
        limit={7}
        closeButton={false}
      />
      <div className={style.price}>${price * quantity}</div>
      <div className={style.title}>{title}</div>
      <div className={style.tools}>
        <div className={style.block}>
          <button className={style.btn}>
            <AiOutlineMinus
              onClick={() => dispatch(decrementProduct(id))}
              className={style.icon}
              size={28}
            />
          </button>
          <div className={style.quantity}>{quantity}</div>
          <button className={style.btn}>
            <AiOutlinePlus
              onClick={() => dispatch(incrementProduct(id))}
              className={style.icon}
              size={28}
            />
          </button>
        </div>
        <button className={style.btn}>
          <AiOutlineClose onClick={removeItem} className={style.icon} size={28} />
        </button>
      </div>
    </motion.div>
  );
};
